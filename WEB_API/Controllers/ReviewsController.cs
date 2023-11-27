using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication16.Interface;
using WebApplication16.Models;

namespace WebApplication16.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewesController : ControllerBase
    {
        private readonly IReview _context;

        public ReviewesController(IReview context)
        {
            _context = context;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Review>>> GetReview()
        {

            return await _context.GetReview();
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Review>> GetReview(int id)
        {
            var revs = await _context.GetReview(id);

            if (revs == null)
            {
                return NotFound();
            }

            return Ok(revs);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Review>> PutReview(int id, Review review)
        {
            if (id != review.ReviewId)
            {
                return BadRequest();
            }

            try
            {
                await _context.PutReview(id, review);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.ReviewExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Review>> PostReview(Review review)
        {
            await _context.PostReview(review);

            return CreatedAtAction("GetReview", new { id = review.ReviewId }, review);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<Car>> DeleteReview(int id)
        {
            return Ok(await _context.DeleteReview(id));

        }
    }
}

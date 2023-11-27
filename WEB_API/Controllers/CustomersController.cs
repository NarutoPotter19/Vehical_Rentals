using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication16.Interface;
using WebApplication16.Models;

namespace WebApplication16.Controllers
{



   // [Authorize]
    
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly ICustomer _context;

        public CustomersController(ICustomer context)
        {
            _context = context;
        }

        // GET: api/Customers
        [HttpGet]


       // [Authorize]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomer()
        {
           

            return await _context.GetCustomer();


        }

        [HttpGet("{id}")]

       
        public async Task<ActionResult<Customer>> GetCustomer(int id)
        {

            var customer = await _context.GetCustomer(id);

            if (customer == null)
            {
                return NotFound();
            }

            return customer;
        }


        [AllowAnonymous]

        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomer(int id, Customer customer)
        {
            if (id != customer.CustomerId)
            {
                return BadRequest();
            }



            try
            {
                await _context.PutCustomer(id, customer);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.CustomerExists(id))
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
        public async Task<ActionResult<Customer>> PostCustomer(Customer customer)
        {

            var cust = await _context.PostCustomer(customer);

            if (cust == null)
            {
                return NoContent();
            }

            return Ok(cust);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {


            return Ok(await _context.DeleteCustomer(id));
        }


    }
}

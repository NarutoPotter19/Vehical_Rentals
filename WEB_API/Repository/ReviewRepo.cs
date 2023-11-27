using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication16.Interface;
using WebApplication16.Models;

namespace WebApplication16.Repository
{
    public class ReviewRepo : IReview
    {

        private readonly HarsDbContext _context;
        public ReviewRepo(HarsDbContext context)
        {

            _context = context;
        }

        public async Task<ActionResult<IEnumerable<Review>>> GetReview()
        {
            return await _context.Review
             .Include(Review => Review.Customer)
             .ToListAsync();
        }


        public async Task<ActionResult<Review>> GetReview(int id)
        {

            return await _context.Review.FindAsync(id);
        }


        public async Task<ActionResult<Review>> PutReview(int id, Review review)
        {
            _context.Entry(review).State = EntityState.Modified;

            await _context.SaveChangesAsync();
            return review;

        }

        public async Task<ActionResult<Review>> PostReview(Review review)
        {
            var reviews = new Review
            {
                Review1 = review.Review1,
                CustomerId = review.CustomerId,
                CreatedAt = review.CreatedAt
            };

            _context.Review.Add(reviews);
            await _context.SaveChangesAsync();
            return review;

        }

        public async Task<ActionResult<Review>> DeleteReview(int id)
        {

            var rev = await _context.Review.FindAsync(id);

            _context.Review.Remove(rev);
            await _context.SaveChangesAsync();

            return rev;
        }

        public bool ReviewExists(int id)
        {
            return (_context.Review?.Any(e => e.ReviewId == id)).GetValueOrDefault();
        }
    }


}

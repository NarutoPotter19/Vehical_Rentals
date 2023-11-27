using Microsoft.AspNetCore.Mvc;
using WebApplication16.Models;

namespace WebApplication16.Interface
{
    public interface IReview
    {
        public Task<ActionResult<IEnumerable<Review>>> GetReview();

        public Task<ActionResult<Review>> GetReview(int id);

        public Task<ActionResult<Review>> PutReview(int id, Review review);

        public Task<ActionResult<Review>> PostReview(Review review);

        public Task<ActionResult<Review>> DeleteReview(int id);
        bool ReviewExists(int id);
    }
}

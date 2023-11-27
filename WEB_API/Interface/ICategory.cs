using Microsoft.AspNetCore.Mvc;
using WebApplication16.Models;

namespace WebApplication16.Interface
{
    public interface ICategory
    {

        public Task<ActionResult<IEnumerable<Category>>> GetCategory();

        public Task<ActionResult<Category>> GetCategory(int id);


        public Task<ActionResult<Category>> PutCategory(int id, Category category);

        public Task<ActionResult<Category>> PostCategory(Category category);
        public Task<ActionResult<Category>> DeleteCategory(int id);
        bool CategoryExists(int id);
    }
}

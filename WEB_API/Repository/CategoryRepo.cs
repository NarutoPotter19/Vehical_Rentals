using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication16.DTOs;
using WebApplication16.Interface;
using WebApplication16.Models;

namespace WebApplication16.Repository
{
    public class CategoryRepo : ICategory

    {
        private readonly HarsDbContext _context;
        public CategoryRepo(HarsDbContext context)
        {

            _context = context;
        }



        public async Task<ActionResult<IEnumerable<Category>>> GetCategory()
        {
            return await _context.Category
           .Include(Category => Category.Car)
           .ToListAsync();
        }


        public async Task<ActionResult<Category>> GetCategory(int id)
        {
            var category = await _context.Category.FindAsync(id);

            return category;
        }

        public async Task<ActionResult<Category>> PutCategory(int id, Category category)
        {
            _context.Entry(category).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return category;
        }

        private Category mapCar(CategoryDto payload)
        {
            var result = new Category();
            result.Name = payload.Name;
            result.Car = new List<Car>();
            foreach (var item in payload.Car)
            {
                var newCars = new Car();
                newCars.Brand = item.Brand;
                newCars.Colour = item.Colour;
                newCars.Model = item.Model;
                newCars.SeatCapacity = item.SeatCapacity;
                result.Car.Add(newCars);
            }
            return result;
        }
        public async Task<ActionResult<Category>> PostCategory(CategoryDto category)
        {
            var newCar = mapCar(category);
            _context.Category.Add(newCar);
            await _context.SaveChangesAsync();


            return newCar;
        }
        public async Task<ActionResult<Category>> DeleteCategory(int id)
        {
            var category = await _context.Category.FindAsync(id);

            _context.Category.Remove(category);
            await _context.SaveChangesAsync();

            return category;
        }

        public bool CategoryExists(int id)
        {
            return (_context.Category?.Any(e => e.CategoryId == id)).GetValueOrDefault();
        }

        public Task<ActionResult<Category>> PostCategory(Category category)
        {
            throw new NotImplementedException();
        }
    }
}

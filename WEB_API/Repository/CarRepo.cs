using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication16.Interface;
using WebApplication16.Models;

namespace WebApplication16.Repository
{
    public class CarRepo : ICar
    {
        private readonly HarsDbContext _context;

        public CarRepo(HarsDbContext context)
        {
            _context = context;
        }

        // GET: api/Cars
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Car>>> GetCar()
        {

            return await _context.Car.ToListAsync();

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Car>> GetCar(int id)
        {


            return await _context.Car.FindAsync(id);

        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Car>> PutCar(int id, Car car)
        {
            _context.Entry(car).State = EntityState.Modified;

            await _context.SaveChangesAsync();
            return car;


        }

        [HttpPost]
        public async Task<ActionResult<Car>> PostCar(Car car)
        {


            _context.Car.Add(car);
            await _context.SaveChangesAsync();
            return car;

        }


        // DELETE: api/Cars/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Car>> DeleteCar(int id)
        {


            var car = await _context.Car.FindAsync(id);


            _context.Car.Remove(car);
            await _context.SaveChangesAsync();

            return car;


        }

        public bool CarExists(int id)
        {
            return (_context.Car?.Any(e => e.CarId == id)).GetValueOrDefault();
        }
    }
}

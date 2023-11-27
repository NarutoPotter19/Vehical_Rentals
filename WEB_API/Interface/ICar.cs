using Microsoft.AspNetCore.Mvc;
using WebApplication16.Models;

namespace WebApplication16.Interface
{
    public interface ICar
    {
        public Task<ActionResult<IEnumerable<Car>>> GetCar();

        public Task<ActionResult<Car>> GetCar(int id);

        public Task<ActionResult<Car>> PutCar(int id, Car car);

        public Task<ActionResult<Car>> PostCar(Car car);
        public Task<ActionResult<Car>> DeleteCar(int id);
        bool CarExists(int id);
    }
}

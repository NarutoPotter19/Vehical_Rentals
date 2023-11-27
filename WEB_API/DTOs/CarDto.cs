using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WebApplication16.Models;

namespace WebApplication16.DTOs
{
    public class CarDto
    {
        [Key]
        public int CarId { get; set; }
        public string? Colour { get; set; }
        public string? Brand { get; set; }
        public string? Model { get; set; }
        public int? SeatCapacity { get; set; }
        [ForeignKey("Category")]
        public int CategoryId { get; set; }

        public string? ImgUrl { get; set; }
        public string? Price { get; set; }
        public string? Fuel { get; set; }
        public string? Drivingtype { get; set; }


    }
}

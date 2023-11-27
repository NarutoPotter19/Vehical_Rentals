using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Runtime.Serialization;

namespace WebApplication16.Models
{
    public class Car
    {
        [Key]
        public int CarId { get; set; }
        public string? Colour { get; set; }
        public string? Brand { get; set; }
        public string? Model { get; set; }
        public int? SeatCapacity { get; set; }
        [ForeignKey("Category")]
        public int CategoryId { get; set; }
        [JsonIgnore]
        [IgnoreDataMember]
        public Category? Category { get; set; }

        public string? ImgUrl { get; set; }
        public string? Price { get; set; }
        public string? Fuel { get; set; }
        public string? Drivingtype { get; set; }
    }
}

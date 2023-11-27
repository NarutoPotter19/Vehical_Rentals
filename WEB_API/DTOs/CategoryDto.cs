using System.ComponentModel.DataAnnotations;
using WebApplication16.Models;

namespace WebApplication16.DTOs
{
    public class CategoryDto
    {
        [Key]
        public int CategoryId { get; set; }
        public string? Name { get; set; }

        public ICollection<CarDto>? Car { get; set; }
    }
}

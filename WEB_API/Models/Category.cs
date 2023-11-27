using System.ComponentModel.DataAnnotations;

namespace WebApplication16.Models
{
    public class Category
    {

        [Key]
        public int CategoryId { get; set; }
        public string? Name { get; set; }

        public ICollection<Car>? Car{ get; set; }

    }
}

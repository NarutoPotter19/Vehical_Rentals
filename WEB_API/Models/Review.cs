using System.ComponentModel.DataAnnotations;

namespace WebApplication16.Models
{
    public class Review
    {
        [Key]
        public int ReviewId { get; set; }
        public string? Review1 { get; set; }
        public int? CustomerId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public virtual Customer? Customer { get; set; }
    }
}

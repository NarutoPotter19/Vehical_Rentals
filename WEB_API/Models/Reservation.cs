using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication16.Models
{
    public class Reservation
    {
        [Key]
        public int ReservationId { get; set; }
        public int? CustomerId { get; set; }
        public decimal? TotalAmount { get; set; }
        [ForeignKey("Car")]
        public int? CarId { get; set; }
        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }

        public virtual Car? Car { get; set; }
        public virtual Customer? Customer { get; set; }
    }
}

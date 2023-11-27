using Microsoft.EntityFrameworkCore;
using WebApplication16.Models;

namespace WebApplication16.Models
{
    public class CarDbContext:DbContext
    {
        public CarDbContext()
        {
        }

        public CarDbContext(DbContextOptions<CarDbContext> options)
            : base(options)
        {
        }
        public virtual DbSet<Car> Car { get; set; } = null!;
        public virtual DbSet<Category> Category { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder) => modelBuilder.Entity<Category>()
            .HasMany(_ => _.Car)
            .WithOne(_ => _.Category)
             .HasForeignKey(_ => _.CategoryId);

        public DbSet<WebApplication16.Models.Reservation>? Reservation { get; set; }

        public DbSet<WebApplication16.Models.Customer>? Customer { get; set; }

        public DbSet<WebApplication16.Models.Review>? Review { get; set; }
    }
}

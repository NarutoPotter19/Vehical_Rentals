using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication16.Interface;
using WebApplication16.Models;

namespace WebApplication16.Repository
{
    public class ReservationRepo : IReservation

    {
        private readonly HarsDbContext _context;
        public ReservationRepo(HarsDbContext context)
        {

            _context = context;
        }

        public async Task<ActionResult<IEnumerable<Reservation>>> GetReservation()
        {

            return await _context.Reservation
             .Include(Reservation => Reservation.Customer)
             .Include(Reservation => Reservation.Car)
             .ToListAsync();
        }

        public async Task<ActionResult<Reservation>> GetReservation(int id)
        {

            return await _context.Reservation.FindAsync(id);
        }

        public async Task<ActionResult<Reservation>> PutReservation(int id, Reservation reservation)
        {
            _context.Entry(reservation).State = EntityState.Modified;

            await _context.SaveChangesAsync();
            return reservation;

        }

        public async Task<ActionResult<Reservation>> PostReservation(Reservation reservation)
        {

            var m2 = new Reservation
            {
                CarId = reservation.CarId,
                TotalAmount = reservation.TotalAmount,
                //Time = reservation.Time,
                CustomerId = reservation.CustomerId

            };


            if (m2 == null)
            {
                throw new Exception("car or customer not found");
            }

            _context.Reservation.Add(m2);
            await _context.SaveChangesAsync();
            return reservation;


        }

        public async Task<ActionResult<Reservation>> DeleteReservation(int id)
        {
            var resv = await _context.Reservation.FindAsync(id);


            _context.Reservation.Remove(resv);
            await _context.SaveChangesAsync();

            return resv;
        }

        public bool ReservationExists(int id)
        {
            return (_context.Reservation?.Any(e => e.ReservationId == id)).GetValueOrDefault();
        }


        public async Task<ActionResult<IEnumerable<Reservation>>> GetReservationsForCustomer(int customerId)
        {
            return await _context.Reservation
                .Where(reservation => reservation.CustomerId == customerId)
                .Include(reservation => reservation.Customer)
                .Include(reservation => reservation.Car)
                .ToListAsync();
        }





    }
}

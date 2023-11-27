using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;
using WebApplication16.Interface;
using WebApplication16.Models;

namespace WebApplication16.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationsController : ControllerBase
    {

        private readonly IReservation _context;

        public ReservationsController(IReservation context)
        {
            _context = context;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Reservation>>> GetReservation()
        {

            return await _context.GetReservation();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Reservation>> GetReservation(int id)
        {

            var reservation = await _context.GetReservation(id);

            if (reservation == null)
            {
                return NotFound();
            }

            return reservation;
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Reservation>> PutReservation(int id, Reservation reservation)
        {
            if (id != reservation.ReservationId)
            {
                return BadRequest();
            }

            try
            {
                await _context.PutReservation(id, reservation);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.ReservationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Reservation>> PostReservation(Reservation reservation)
        {
            await _context.PostReservation(reservation);

            return CreatedAtAction("GetReservation", new { id = reservation.ReservationId }, reservation);

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Reservation>> DeleteReservation(int id)
        {
            return await _context.DeleteReservation(id);
        }



        [HttpGet("customer/{customerId}/reservations")]
        public async Task<ActionResult<IEnumerable<Reservation>>> GetReservationsForCustomer(int customerId)
        {
            return await _context.GetReservationsForCustomer(customerId);
        }
    }




}

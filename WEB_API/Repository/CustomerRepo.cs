using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication16.Interface;
using WebApplication16.Models;

namespace WebApplication16.Repository
{
    public class CustomerRepo : ICustomer
    {
        private readonly HarsDbContext _context;
        public CustomerRepo(HarsDbContext context)
        {

            _context = context;
        }


        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomer()
        {
            return await _context.Customer.ToListAsync();
        }

    
        public async Task<ActionResult<Customer>> GetCustomer(int id)
        {


            return await _context.Customer.FindAsync(id);
        }


        public async Task<ActionResult<Customer>> PutCustomer(int id, Customer customer)
        {
          

            _context.Entry(customer).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return customer;
        }

        public async Task<ActionResult<Customer>> PostCustomer(Customer customer)
        {
           if (_context.Customer.Any(x => x.Username == customer.Username))

             {

                throw new InvalidOperationException($"Username '{customer.Username}' already exists");
            }

            
            



            //// hash password
            customer.Password = BCrypt.Net.BCrypt.HashPassword(customer.Password);

            _context.Customer.Add(customer);
            await _context.SaveChangesAsync();
            return customer;
        }

        public async Task<ActionResult<Customer>> DeleteCustomer(int id)
        {
            var customer = await _context.Customer.FindAsync(id);
            _context.Customer.Remove(customer);
            await _context.SaveChangesAsync();

            return customer;
        }

        public bool CustomerExists(int id)
        {
            return (_context.Customer?.Any(e => e.CustomerId == id)).GetValueOrDefault();
        }







    }
}

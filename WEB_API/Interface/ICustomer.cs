using Microsoft.AspNetCore.Mvc;
using WebApplication16.Models;

namespace WebApplication16.Interface
{
    public interface ICustomer
    {
        public Task<ActionResult<IEnumerable<Customer>>> GetCustomer();

        public Task<ActionResult<Customer>> GetCustomer(int id);

        public Task<ActionResult<Customer>> PutCustomer(int id, Customer customer);

        public Task<ActionResult<Customer>> PostCustomer(Customer customer);
        public Task<ActionResult<Customer>> DeleteCustomer(int id);
        bool CustomerExists(int id);
    }
}

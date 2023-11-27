using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication16.Models;

namespace WebApplication16.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {

        private readonly HarsDbContext _context;

        public TestController(HarsDbContext context)
        {
            _context = context;
        }
        [Authorize]
        [HttpGet]
        [Route("test")]
        public string Getdata()
        {
            return "Authenticated with jwt";
        }
    }
}

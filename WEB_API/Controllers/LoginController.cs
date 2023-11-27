using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebApplication16.Models;
using System.Data;
using WebApplication16.Interface;
using Microsoft.EntityFrameworkCore;

namespace WebApplication16.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   
    public class LoginController : ControllerBase
    {
        public IConfiguration _Userservice;
        private readonly  HarsDbContext _context;


        public LoginController(IConfiguration config, HarsDbContext context)
        {
            _Userservice = config;
            _context = context;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Login model)
        {
            var user = await _context.Customer
            .Where(c => c.Username == model.Username)
            .FirstOrDefaultAsync();

            //var register = BCrypt.Net.BCrypt.HashPassword(model.Password);
            if (user != null && BCrypt.Net.BCrypt.Verify(model.Password, user.Password))
            {
                var token = GenerateJwtToken(user);
                return Ok(new { Token = token, Role = user.UserType });
            }

            return BadRequest("Invalid credentials");
        }

       

        private string GenerateJwtToken(Customer user)
        {
            var claims = new[]
            {
               new Claim(JwtRegisteredClaimNames.Sub, _Userservice["Jwt:Subject"]??""),
               new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
               new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
               new Claim("CustomerId?", user.CustomerId.ToString()??""),
               new Claim("Username?", user.Username??""),
           
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_Userservice["Jwt:Key"]));
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                _Userservice["Jwt:Issuer"],
                _Userservice["Jwt:Audience"],
                claims,
                expires: DateTime.UtcNow.AddMinutes(10),
                signingCredentials: signIn);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
    //public class LoginModel
    //{
    //    public string? Username { get; set; }
    //    public string? Password { get; set; }
    //}
}
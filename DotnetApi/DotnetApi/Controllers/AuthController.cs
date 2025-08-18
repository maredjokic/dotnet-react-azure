using System.Security.Claims;
using DotnetApi.Models;
using DotnetApi.Services;
using DotnetApi.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DotnetApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IWebHostEnvironment _env;
        private readonly ILogger<AuthController> _logger;

        public AuthController(IAuthService authService, IWebHostEnvironment env, ILogger<AuthController> logger)
        {
            _authService = authService;
            _env = env;
            _logger = logger;
        }

        [HttpPost("register")]
        [ProducesResponseType(typeof(object), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(IEnumerable<string>), StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Register([FromBody] RegisterDto model)
        {
            _logger.LogInformation("Register");
            var result = await _authService.RegisterAsync(model);

            if (!result.Success)
                return BadRequest(new { errors = result.Errors });

            Response.Cookies.Append("jwt", result.Token!, new CookieOptions
            {
                HttpOnly = true,
                Secure = !_env.IsDevelopment(),
                SameSite = SameSiteMode.Strict,
                Expires = DateTime.UtcNow.AddHours(1)
            });

            return Ok(new { message = "Registration successful", token = result.Token });
        }

        [HttpPost("login")]
        [ProducesResponseType(typeof(object), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(object), StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> Login([FromBody] LoginDto model)
        {
            _logger.LogInformation("Login");
            var result = await _authService.LoginAsync(model);

            if (!result.Success)
                return Unauthorized(new { error = result.Error });

            Response.Cookies.Append("jwt", result.Token!, new CookieOptions
            {
                HttpOnly = true,
                Secure = !_env.IsDevelopment(),
                SameSite = SameSiteMode.Strict,
                Expires = DateTime.UtcNow.AddHours(1)
            });

            return Ok(new { message = "Login successful", token = result.Token });
        }

        [HttpPost("logout")]
        [ProducesResponseType(typeof(object), StatusCodes.Status200OK)]
        public IActionResult Logout()
        {
            _logger.LogInformation("Logout");
            Response.Cookies.Delete("jwt");
            return Ok(new { message = "Logged out" });
        }

        [Authorize]
        [HttpGet("me")]
        [ProducesResponseType(typeof(object), StatusCodes.Status200OK)]
        public IActionResult Me()
        {
            _logger.LogInformation("Check");
            var email = User.FindFirstValue(ClaimTypes.Email);

            return Ok(new { email });
            //return Ok(new { username = User.Identity?.Name });
        }
    }
}
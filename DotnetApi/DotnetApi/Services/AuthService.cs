using DotnetApi.Models;
using DotnetApi.Repositories.Interfaces;
using DotnetApi.Repositories.Interfaces.DotnetApi.Repositories;
using DotnetApi.Services.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace DotnetApi.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ITokenService _tokenService;

        public AuthService(
            IUserRepository userRepository,
            SignInManager<ApplicationUser> signInManager,
            ITokenService tokenService)
        {
            _userRepository = userRepository;
            _signInManager = signInManager;
            _tokenService = tokenService;
        }

        public async Task<(bool Success, string? Token, IEnumerable<string>? Errors)> RegisterAsync(RegisterDto model)
        {
            var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
            var result = await _userRepository.CreateAsync(user, model.Password);

            if (!result.Succeeded)
                return (false, null, result.Errors.Select(e => e.Description));

            var token = _tokenService.GenerateToken(user);
            return (true, token, null);
        }

        public async Task<(bool Success, string? Token, string? Error)> LoginAsync(LoginDto model)
        {
            var user = await _userRepository.FindByEmailAsync(model.Email);
            if (user == null)
                return (false, null, "Invalid credentials");

            var result = await _signInManager.CheckPasswordSignInAsync(user, model.Password, false);
            if (!result.Succeeded)
                return (false, null, "Invalid credentials");

            var token = _tokenService.GenerateToken(user);
            return (true, token, null);
        }
    }
}

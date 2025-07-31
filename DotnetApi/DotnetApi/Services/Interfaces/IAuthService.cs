using DotnetApi.Models;

namespace DotnetApi.Services.Interfaces
{
    public interface IAuthService
    {
        Task<(bool Success, string? Token, IEnumerable<string>? Errors)> RegisterAsync(RegisterDto model);
        Task<(bool Success, string? Token, string? Error)> LoginAsync(LoginDto model);
    }
}

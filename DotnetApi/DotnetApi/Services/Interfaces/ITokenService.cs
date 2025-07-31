using DotnetApi.Models;

namespace DotnetApi.Services
{
    public interface ITokenService
    {
        string GenerateToken(ApplicationUser user);
    }
}
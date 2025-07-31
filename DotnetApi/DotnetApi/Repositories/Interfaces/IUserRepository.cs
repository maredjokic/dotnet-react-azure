using DotnetApi.Models;
using Microsoft.AspNetCore.Identity;

namespace DotnetApi.Repositories.Interfaces
{

    namespace DotnetApi.Repositories
    {
        public interface IUserRepository
        {
            Task<ApplicationUser?> FindByEmailAsync(string email);
            Task<IdentityResult> CreateAsync(ApplicationUser user, string password);
        }
    }
}

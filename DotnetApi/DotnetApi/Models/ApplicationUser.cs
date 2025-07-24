using Microsoft.AspNetCore.Identity;

namespace DotnetApi.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? FullName { get; set; }
    }
}

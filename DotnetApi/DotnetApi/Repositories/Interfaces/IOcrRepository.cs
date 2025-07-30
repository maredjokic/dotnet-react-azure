using DotnetApi.Models;

namespace DotnetApi.Repositories.Interfaces
{
    public interface IOcrRepository
    {
        Task<OcrResultDto> GetTextFromImageAsync(Stream imageStream, string language);
    }
}

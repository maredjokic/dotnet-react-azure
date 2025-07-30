using DotnetApi.Models;

namespace DotnetApi.Services.Interfaces
{
    public interface IOcrService
    {
        Task<OcrResultDto> ExtractTextAsync(Stream imageStream, string language);
    }
}

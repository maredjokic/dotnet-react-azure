using DotnetApi.Models;
using DotnetApi.Repositories.Interfaces;
using DotnetApi.Services.Interfaces;

namespace DotnetApi.Repositories
{
    public class OcrRepository : IOcrRepository
    {
        private readonly IOcrService _ocrService;

        public OcrRepository(IOcrService ocrService)
        {
            _ocrService = ocrService;
        }

        public Task<OcrResultDto> GetTextFromImageAsync(Stream imageStream, string language)
        {
            return _ocrService.ExtractTextAsync(imageStream, language);
        }
    }

}

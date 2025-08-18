using DotnetApi.Models;
using DotnetApi.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace DotnetApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OcrController : ControllerBase
    {
        private readonly IOcrRepository _ocrRepository;
        private readonly ILogger<WeatherForecastController> _logger;

        public OcrController(IOcrRepository ocrRepository, ILogger<WeatherForecastController> logger)
        {
            _ocrRepository = ocrRepository;
            _logger = logger;
        }

        [HttpPost("extract")]
        public async Task<IActionResult> ExtractText([FromForm] OcrFormDto form)
        {
            _logger.LogInformation("Received OCR request with language: {Language}", form.Language);
            try
            {
                if (form.File == null || form.File.Length == 0)
                return BadRequest("No file uploaded.");

                await using var stream = form.File.OpenReadStream();
                var result = await _ocrRepository.GetTextFromImageAsync(stream, form.Language);

            return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message, stack = ex.StackTrace });
            }
        }
    }
}

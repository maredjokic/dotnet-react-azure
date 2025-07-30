namespace DotnetApi.Models
{
    public class OcrFormDto
    {
        public IFormFile File { get; set; } = default!;
        public string Language { get; set; } = "eng";
    }
}

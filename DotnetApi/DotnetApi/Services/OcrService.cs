using DotnetApi.Models;
using DotnetApi.Services.Interfaces;
using Tesseract;

public class OcrService : IOcrService
{
    private readonly string _tessDataPath;

    public OcrService(IWebHostEnvironment env)
    {
        //if (env.IsDevelopment())
        //{
        //    _tessDataPath = Path.Combine(Directory.GetCurrentDirectory(), "tessdata");
        //}
        //else
        //{
            _tessDataPath = "/home/site/wwwroot/tessdata";
        //}
    }

    public async Task<OcrResultDto> ExtractTextAsync(Stream imageStream, string language)
    {
        var imageBytes = await ReadFullyAsync(imageStream);

        using var engine = new TesseractEngine(_tessDataPath, language, EngineMode.Default);
        using var img = Pix.LoadFromMemory(imageBytes);
        using var page = engine.Process(img);

        var text = page.GetText();
        return new OcrResultDto { Text = text };
    }

    private async Task<byte[]> ReadFullyAsync(Stream input)
    {
        using var ms = new MemoryStream();
        await input.CopyToAsync(ms);
        return ms.ToArray();
    }
}

using DotnetApi.Models;
using DotnetApi.Services.Interfaces;
using Microsoft.AspNetCore.Hosting;
using System.Diagnostics;

public class OcrService : IOcrService
{
    private readonly string _tessDataPath;

    public OcrService(IWebHostEnvironment env)
    {
        _tessDataPath = "/home/site/wwwroot/tessdata";
    }

    public async Task<OcrResultDto> ExtractTextAsync(Stream imageStream, string language)
    {
        var tempFile = Path.GetTempFileName() + ".png";
        await using (var fs = new FileStream(tempFile, FileMode.Create))
        {
            await imageStream.CopyToAsync(fs);
        }

        var outputFile = Path.GetTempFileName();

        var psi = new ProcessStartInfo
        {
            FileName = "tesseract",
            Arguments = $"{tempFile} {outputFile} -l {language} --tessdata-dir {_tessDataPath}",
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            UseShellExecute = false,
            CreateNoWindow = true
        };

        using var process = Process.Start(psi);
        await process.WaitForExitAsync();

        var error = await process.StandardError.ReadToEndAsync();
        if (!string.IsNullOrEmpty(error))
        {
            if (!error.ToLower().Contains("error"))
            {
                Console.WriteLine($"Tesseract warning: {error}");
            }
            else
            {
                throw new Exception($"Tesseract error: {error}");
            }
        }

        var text = await File.ReadAllTextAsync(outputFile + ".txt");

        File.Delete(tempFile);
        File.Delete(outputFile + ".txt");

        return new OcrResultDto { Text = text };
    }
}

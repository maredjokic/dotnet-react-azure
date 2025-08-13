import { useState } from "react";
import { api } from "../lib/api";

export default function OcrUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [language, setLanguage] = useState("eng");
  const [result, setResult] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Select a file!");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("language", language);

    try {
      const response = await api.post("/api/ocr/extract", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(response.data.text);
    } catch (error: any) {
      console.error(error);
      alert("OCR failed.");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 p-6 flex flex-col items-center">

      {/* Options row */}
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-5xl flex flex-col md:flex-row gap-4 items-center justify-center mb-8"
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="flex-1 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700"
        />

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="flex-none p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        >
          <option value="eng">English</option>
          <option value="srp">Serbian</option>
          <option value="hrv">Croatian</option>
          <option value="eng+srp">English + Serbian</option>
        </select>

        <button
          type="submit"
          className="flex-none bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded transition-colors duration-300"
        >
          Extract Text
        </button>
      </form>

      {/* Result and preview */}
      {(preview || result) && (
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6">
          {preview && (
            <div className="flex-1">
              <img src={preview} alt="Preview" className="w-full h-auto rounded-lg object-contain" />
            </div>
          )}
          {result && (
            <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 transition-colors duration-300 whitespace-pre-wrap">
              <div>{result}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

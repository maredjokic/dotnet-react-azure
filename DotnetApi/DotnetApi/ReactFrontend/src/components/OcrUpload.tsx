import { useState } from "react";
import { api } from "../lib/api";

export default function OcrUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [language, setLanguage] = useState("eng");
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Select a file!");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("language", language);

    try {
      const response = await api.post("/api/ocr/extract", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(response.data.text);
    } catch (error: any) {
      console.error(error);
      alert("OCR failed.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="text-white space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block w-full"
        />

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="text-white block w-full p-2 border rounded"
        >
          <option value="eng">English</option>
          <option value="srp">Serbian</option>
          <option value="hrv">Croatian</option>
          <option value="eng+srp">English + Serbian</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Extract Text
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 border rounded bg-gray-50 whitespace-pre-wrap">
          <strong>OCR Result:</strong>
          <div>{result}</div>
        </div>
      )}
    </div>
  );
}
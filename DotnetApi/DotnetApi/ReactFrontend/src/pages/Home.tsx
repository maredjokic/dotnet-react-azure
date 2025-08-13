import React from "react";

const Home: React.FC = () => (
  <div className="p-8 min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    {/* Naslov */}
    <h1 className="text-4xl font-bold mb-6">Welcome to Text Extractor Service</h1>

    {/* O aplikaciji */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">About the App</h2>
      <p className="mb-2">
        Our service allows you to easily extract text from images, PDFs, and other documents.
        Just upload your file and get clean, editable text instantly.
      </p>
      <p>
        We support multiple formats, and our goal is to make text extraction fast, accurate, 
        and user-friendly.
      </p>
    </section>

    {/* Kontakt */}
    <section className="mt-auto border-t border-gray-300 dark:border-gray-700 pt-4">
      <h2 className="text-2xl font-semibold mb-2">Contact</h2>
      <p>Email: <a href="mailto:marko@example.com" className="text-blue-600 dark:text-blue-400">marko@example.com</a></p>
      <p>Phone: <a href="tel:+381601234567" className="text-blue-600 dark:text-blue-400">+381 60 123 4567</a></p>
      <p>Website: <a href="https://www.example.com" className="text-blue-600 dark:text-blue-400">www.example.com</a></p>
    </section>
  </div>
);

export default Home;
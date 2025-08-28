import React from "react";

const Home: React.FC = () => (
  <div className="p-8 min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    {/* Naslov */}
    <h1 className="text-4xl font-bold mb-6">Welcome to Text Extractor Service</h1>

    {/* Kontakt */}
    <section className="mt-auto border-t border-gray-300 dark:border-gray-700 pt-4">
      <h2 className="text-2xl font-semibold mb-2">Contact</h2>
      <p>Email: <a href="mailto:marko.djokic.contact@gmail.com" className="text-blue-600 dark:text-blue-400">marko.djokic.contact@gmail.com</a></p>
      <p>Phone: <a href="tel:+381644402202" className="text-blue-600 dark:text-blue-400">+381 64 440 22 02</a></p>
      <p>Website: <a href="https://www.maretechdev.vercel.app" className="text-blue-600 dark:text-blue-400">https://www.maretechdev.vercel.app</a></p>
    </section>
  </div>
);

export default Home;
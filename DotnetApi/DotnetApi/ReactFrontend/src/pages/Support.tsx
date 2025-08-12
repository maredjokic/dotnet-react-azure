import { Coffee, Heart } from "lucide-react";

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
      bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 
      px-4 transition-colors duration-300"
    >
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Support My Work
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center max-w-lg">
        If you enjoy my projects and want to help me keep building awesome tools,
        consider supporting me via Buy Me a Coffee or Patreon. Every bit helps! ☕
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <a
          href="https://www.buymeacoffee.com/markomare"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-yellow-400 text-black 
            px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg 
            hover:scale-105 transition-transform"
        >
          <Coffee className="w-5 h-5" />
          Buy Me a Coffee
        </a>

        <a
          href="https://patreon.com/markomare"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-red-600 text-white 
            px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg 
            hover:scale-105 transition-transform"
        >
          <Heart className="w-5 h-5" />
          Support on Patreon
        </a>
      </div>
    </div>
  );
}
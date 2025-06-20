import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 px-6 py-12 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-800">About This App</h1>

        <p className="mb-4 text-lg">
          Welcome to <span className="font-semibold text-indigo-700">Crypto Market Dashboard</span> —
          your one-stop platform to explore the cryptocurrency market in real-time.
        </p>

        <p className="mb-4">
          This app provides up-to-date data on the top 100 cryptocurrencies including:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>💰 Live price updates in USD</li>
          <li>📊 24h price change</li>
          <li>📈 Market capitalization</li>
          <li>🔍 Detailed view for each coin</li>
        </ul>

        <p className="mb-6">
          It's built with modern frontend technologies to ensure speed and responsiveness.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <h2 className="font-semibold text-indigo-700 mb-1">🛠️ Tech Stack</h2>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>Vite</li>
              <li>Tailwind CSS</li>
              <li>CoinGecko API</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-indigo-700 mb-1">👤 Developer</h2>
            <p>Built with ❤️ by <span className="font-semibold">Abdulmalik Badmus</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

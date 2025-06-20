import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [topCoins, setTopCoins] = useState([]);

  useEffect(() => {
    const fetchTopCoins = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1"
        );
        const data = await res.json();
        setTopCoins(data);
      } catch (error) {
        console.error("Error fetching top coins:", error);
      }
    };

    fetchTopCoins();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100">
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
          🚀 Welcome to <span className="text-indigo-700">Crypto Market Dashboard</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Get real-time data on top cryptocurrencies, price trends, and market insights — all in one place.
        </p>
        <Link
          to="/dashboard"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
        >
          View Dashboard
        </Link>
      </div>

      {/* Features */}
      <div className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold text-indigo-700 mb-2">📊 Dashboard</h3>
            <p className="text-gray-600 text-sm">
              Explore top 100 cryptocurrencies, live prices and performance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-700 mb-2">📰 News</h3>
            <p className="text-gray-600 text-sm">
              Stay updated with the latest news in the crypto world.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-700 mb-2">🔍 Coin Details</h3>
            <p className="text-gray-600 text-sm">
              Dive into each coin’s metrics like market cap, price change & rank.
            </p>
          </div>
        </div>
      </div>

      {/* 🔥 Live Preview Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-indigo-800 text-center mb-6">🔥 Top 3 Coins Right Now</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {topCoins.map((coin) => (
            <Link
              key={coin.id}
              to={`/coin/${coin.id}`}
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
            >
              <div className="flex flex-col items-center space-y-3">
                <img src={coin.image} alt={coin.name} className="w-12 h-12" />
                <h3 className="text-lg font-bold text-gray-800">{coin.name}</h3>
                <p className="text-gray-600 text-sm uppercase">{coin.symbol}</p>
                <p className="text-indigo-700 font-semibold text-sm">
                  💰 ${coin.current_price.toLocaleString()}
                </p>
                <p
                  className={`text-sm font-medium ${
                    coin.price_change_percentage_24h >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  24h: {coin.price_change_percentage_24h.toFixed(2)}%
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center py-10">
        <p className="text-gray-600 mb-4">Want to learn more about this project?</p>
        <Link
          to="/about"
          className="text-indigo-600 font-medium hover:underline"
        >
          About This App →
        </Link>
      </div>
    </div>
  );
};

export default Home;

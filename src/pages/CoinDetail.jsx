import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CoinDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        const data = await res.json();
        setCoin(data);
      } catch (error) {
        console.error("Error fetching coin detail:", error);
        setCoin(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCoin();
  }, [id]);

  if (loading) return <div className="p-8 text-center text-gray-600 text-lg">⏳ Loading...</div>;
  if (!coin) return <div className="p-8 text-center text-red-600 text-lg">❌ Coin not found.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white bg-opacity-80 backdrop-blur-md shadow-xl rounded-2xl p-8 relative">
        {/* Back Button inside the card at top-left */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium shadow hover:bg-indigo-200 transition duration-200"
        >
          ← Back
        </button>

        <div className="flex flex-col items-center mt-2">
          <img
            src={coin.image.large}
            alt={coin.name}
            className="w-24 h-24 mb-4 drop-shadow-xl"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {coin.name} <span className="text-xl text-gray-500">({coin.symbol.toUpperCase()})</span>
          </h1>
          <p className="text-sm text-gray-600 mb-6 italic">Powered by CoinGecko API</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 text-lg text-gray-700">
          <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500 mb-1">📈 Current Price</p>
            <p className="font-semibold text-indigo-700 text-xl">
              ${coin.market_data.current_price.usd.toLocaleString()}
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500 mb-1">💹 Market Cap</p>
            <p className="font-semibold text-indigo-700 text-xl">
              ${coin.market_data.market_cap.usd.toLocaleString()}
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500 mb-1">🔄 24h Change</p>
            <p
              className={`font-semibold text-xl ${
                coin.market_data.price_change_percentage_24h >= 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {coin.market_data.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500 mb-1">🏅 Rank</p>
            <p className="font-semibold text-indigo-700 text-xl">
              #{coin.market_cap_rank}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;

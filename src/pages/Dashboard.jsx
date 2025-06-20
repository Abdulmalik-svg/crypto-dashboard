import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Dashboard() {
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100")
      .then((res) => res.json())
      .then((data) => setCryptos(data))
      .catch((err) => console.error("❌ Fetch error:", err))
  }, [])

  const filteredCryptos = cryptos.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          🚀 Crypto Market Dashboard
        </h1>

        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCryptos.map((coin) => (
            <Link
              to={`/coin/${coin.id}`}
              key={coin.id}
              className="bg-white rounded-2xl shadow-lg p-5 transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={coin.image} alt={coin.name} className="w-12 h-12" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {coin.name}
                  </h2>
                  <span className="text-sm text-gray-500 uppercase">{coin.symbol}</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-gray-700">💰 Price: ${coin.current_price.toLocaleString()}</p>
                <p className="text-gray-700">📊 Market Cap: ${coin.market_cap.toLocaleString()}</p>
                <p
                  className={`text-sm font-bold px-3 py-1 inline-block rounded-full ${
                    coin.price_change_percentage_24h >= 0
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  24h Change: {coin.price_change_percentage_24h.toFixed(2)}%
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Dashboard

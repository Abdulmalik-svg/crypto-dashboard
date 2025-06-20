import React, { useEffect, useState } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const API_URL = `https://gnews.io/api/v4/search?q=crypto&lang=en&max=6&page=${page}&token=993eb506d43751bfbdb6e5f6519be6dd`;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();

    // ✅ Auto-refresh every 5 minutes (300,000ms)
    const interval = setInterval(fetchNews, 5 * 60 * 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [page]); // page is a dependency so it still works with pagination

  if (loading) return <p className="p-6 text-center text-gray-600 text-lg">Loading news...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-8">
          📰 Crypto News
        </h1>

        {articles.length === 0 ? (
          <p className="text-center text-gray-600">No news found. Try again later.</p>
        ) : (
          <>
            <div className="grid gap-6 mb-10">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition duration-200"
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-1">{article.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {article.source.name} • {new Date(article.publishedAt).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 mb-3">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline text-sm font-medium"
                  >
                    🔗 Read full article
                  </a>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default News;

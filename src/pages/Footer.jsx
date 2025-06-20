import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 mt-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-indigo-600 mb-2">Crypto Market</h2>
          <p className="text-sm text-gray-600">
            A real-time crypto dashboard powered by CoinGecko and GNews API. Monitor coins, trends and news with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-indigo-600 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-indigo-600 transition">Home</Link></li>
            <li><Link to="/dashboard" className="hover:text-indigo-600 transition">Dashboard</Link></li>
            <li><Link to="/news" className="hover:text-indigo-600 transition">News</Link></li>
            <li><Link to="/about" className="hover:text-indigo-600 transition">About</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-indigo-600 font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.coingecko.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition">CoinGecko API</a></li>
            <li><a href="https://gnews.io" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition">GNews API</a></li>
            <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition">GitHub Repo</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-indigo-600 font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-lg text-gray-700">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Crypto Market Dashboard. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

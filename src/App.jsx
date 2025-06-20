import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import CoinDetail from "./pages/CoinDetail";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import News from "./pages/News"
import Footer from "./pages/Footer.jsx";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/coin/:id" element={<CoinDetail />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

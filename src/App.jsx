import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"
import ShopByCategory from "./components/ShopByCategory"
import Search from "./pages/Search"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="h-10 bg-white sm:h-14 lg:h-20" />
      <FeaturedProducts />
      <div className="h-8 bg-white sm:h-12 lg:h-16" />
      <ShopByCategory />
    </div>
  )
}

function SearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Search />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
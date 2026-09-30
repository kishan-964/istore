import { Link } from "react-router-dom"
import {
Heart,
Search,
ShoppingBag,
Menu,
X,
} from "lucide-react"
import { useState } from "react"

function Navbar() {
const [mobileMenu, setMobileMenu] = useState(false)

return ( <header className="sticky top-0 z-50 w-full px-2 pt-2 sm:px-3 sm:pt-3"> <div className="mx-auto w-full max-w-[1600px] rounded-[20px] border border-black/5 bg-white/90 shadow-lg shadow-black/5 backdrop-blur-2xl">

```
    {/* Main Navbar */}
    <div className="flex h-[40px] items-center justify-between px-5 sm:px-7 lg:px-10">

      {/* Logo */}
      <Link
        to="/"
        className="shrink-0 text-[26px] font-semibold tracking-[-0.05em] text-black transition-opacity hover:opacity-70"
      >
        iStore
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-8 md:flex lg:gap-10">

        <Link
          to="/"
          className="text-[14px] font-medium text-gray-600 transition-colors duration-200 hover:text-black"
        >
          Home
        </Link>

        <Link
          to="/iphone"
          className="text-[14px] font-medium text-gray-600 transition-colors duration-200 hover:text-black"
        >
          iPhone
        </Link>

        <Link
          to="/accessories"
          className="text-[14px] font-medium text-gray-600 transition-colors duration-200 hover:text-black"
        >
          Accessories
        </Link>

        <Link
          to="/about"
          className="text-[14px] font-medium text-gray-600 transition-colors duration-200 hover:text-black"
        >
          About
        </Link>

        <Link
          to="/contact"
          className="text-[14px] font-medium text-gray-600 transition-colors duration-200 hover:text-black"
        >
          Contact
        </Link>

      </nav>

      {/* Right Side */}
      <div className="flex items-center gap-1">

        {/* Search */}
        <Link
          to="/search"
          aria-label="Search"
          className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-all duration-200 hover:bg-black/5 hover:text-black"
        >
          <Search
            size={19}
            strokeWidth={1.8}
          />
        </Link>

        {/* Wishlist */}
        <Link
          to="/wishlist"
          aria-label="Wishlist"
          className="hidden h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-all duration-200 hover:bg-black/5 hover:text-black sm:flex"
        >
          <Heart
            size={19}
            strokeWidth={1.8}
          />
        </Link>

        {/* Login */}
        <Link
          to="/login"
          className="ml-1 hidden px-3 py-2 text-[14px] font-medium text-gray-600 transition-colors duration-200 hover:text-black sm:block"
        >
          Login
        </Link>

        {/* Register */}
        <Link
          to="/register"
          className="hidden rounded-full bg-black px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-200 hover:bg-gray-800 sm:block"
        >
          Register
        </Link>

        {/* Cart */}
        <Link
          to="/cart"
          aria-label="Shopping cart"
          className="relative ml-1 flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-all duration-200 hover:bg-black/5 hover:text-black"
        >
          <ShoppingBag
            size={19}
            strokeWidth={1.8}
          />

          <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[8px] font-semibold text-white">
            2
          </span>
        </Link>

        {/* Mobile Menu */}
        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
          className="ml-1 flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-all duration-200 hover:bg-black/5 hover:text-black md:hidden"
        >
          {mobileMenu ? (
            <X size={20} strokeWidth={1.8} />
          ) : (
            <Menu size={20} strokeWidth={1.8} />
          )}
        </button>

      </div>
    </div>

    {/* Mobile Menu */}
    {mobileMenu && (
      <div className="border-t border-black/5 px-5 pb-5 pt-3 md:hidden">

        <nav className="flex flex-col">

          <Link
            to="/"
            onClick={() => setMobileMenu(false)}
            className="border-b border-black/5 py-3.5 text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Home
          </Link>

          <Link
            to="/iphone"
            onClick={() => setMobileMenu(false)}
            className="border-b border-black/5 py-3.5 text-sm font-medium text-gray-700 transition hover:text-black"
          >
            iPhone
          </Link>

          <Link
            to="/accessories"
            onClick={() => setMobileMenu(false)}
            className="border-b border-black/5 py-3.5 text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Accessories
          </Link>

          <Link
            to="/about"
            onClick={() => setMobileMenu(false)}
            className="border-b border-black/5 py-3.5 text-sm font-medium text-gray-700 transition hover:text-black"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setMobileMenu(false)}
            className="border-b border-black/5 py-3.5 text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Contact
          </Link>

        </nav>

        <div className="mt-4 grid grid-cols-2 gap-3">

          <Link
            to="/login"
            onClick={() => setMobileMenu(false)}
            className="flex h-11 items-center justify-center rounded-full border border-gray-200 text-sm font-medium text-black transition hover:bg-[#f5f5f7]"
          >
            Login
          </Link>

          <Link
            to="/register"
            onClick={() => setMobileMenu(false)}
            className="flex h-11 items-center justify-center rounded-full bg-black text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Register
          </Link>

        </div>

        <Link
          to="/cart"
          onClick={() => setMobileMenu(false)}
          className="mt-3 flex h-11 items-center justify-center gap-2 rounded-full bg-[#f5f5f7] text-sm font-medium text-black transition hover:bg-gray-200"
        >
          <ShoppingBag size={17} />
          View Cart
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[9px] font-semibold text-white">
            2
          </span>
        </Link>

      </div>
    )}

  </div>
</header>

)
}

export default Navbar

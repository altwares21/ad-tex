import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/ad-tex.png";
export default function Navigation() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/")
      ? "text-ad-yellow border-b-2 border-ad-yellow"
      : "text-white hover:text-ad-yellow";

  return (
    <nav className="bg-ad-purple text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className="bg-white rounded flex items-center justify-center w-10 h-10">
            <img src={logo} alt="Ad-Tex Logo" className="h-8 object-contain" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Ad-Tex</h1>
            <p className="text-xs text-gray-300">Making Your Business Be Known</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link to="/" className={`font-semibold pb-2 transition-all ${isActive("/")}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`font-semibold pb-2 transition-all ${isActive("/about")}`}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/mission" className={`font-semibold pb-2 transition-all ${isActive("/mission")}`}>
              Mission & Vision
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded hover:bg-ad-purple/70 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Toggle Menu</span>
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-ad-purple/95 px-6 py-4 border-t border-ad-purple/50">
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/" className={`font-semibold transition-all ${isActive("/")}`} onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`font-semibold transition-all ${isActive("/about")}`} onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/mission" className={`font-semibold transition-all ${isActive("/mission")}`} onClick={() => setMenuOpen(false)}>
                Mission & Vision
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

// src/components/Header.tsx
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ThemeIcon from "./ThemeIcon";

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header = ({ toggleSidebar, isSidebarOpen }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as "theme1" | "theme2" | "theme3");
  };

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        theme === "theme2"
          ? "fixed top-0"
          : isFixed
          ? "fixed top-0 bg-white shadow-md"
          : "relative"
      }`}
    >
      <div className="theme-header-bg shadow-md">
        <div
          className={`${
            theme === "theme2" ? "container-fluid" : "container"
          } mx-auto px-4`}
        >
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* Toggle button for theme2 */}
              {theme === "theme2" && (
                <button
                  onClick={toggleSidebar}
                  className="mr-4 theme-header-text cursor-pointer"
                  aria-label="Toggle sidebar"
                >
                  {isSidebarOpen ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              )}
              <Link to="/" className="flex items-center space-x-2">
                <ThemeIcon theme={theme} />
                <span className="theme-header-text text-xl font-bold">
                  ThemeSwitcher
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - hide for theme2 */}
            {theme !== "theme2" && (
              <nav className="hidden md:flex items-center space-x-6">
                <NavLink to="/" className="theme-header-link">
                  Home
                </NavLink>
                <NavLink to="/about" className="theme-header-link">
                  About
                </NavLink>
                <NavLink to="/contact" className="theme-header-link">
                  Contact
                </NavLink>

                <div className="flex items-center space-x-2">
                  <label htmlFor="theme-select" className="theme-header-link">
                    Theme:
                  </label>
                  <select
                    id="theme-select"
                    value={theme}
                    onChange={handleThemeChange}
                    className="theme-select bg-transparent border rounded py-1 px-2"
                  >
                    <option value="theme1">Minimalist</option>
                    <option value="theme2">Dark</option>
                    <option value="theme3">Colorful</option>
                  </select>
                </div>
              </nav>
            )}

            {/* Mobile Menu Button */}
            {theme !== "theme2" && (
              <button
                className="md:hidden theme-header-text cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && theme !== "theme2" && (
            <div className="md:hidden theme-mobile-menu-bg py-4 transition-all duration-300">
              <div className="flex flex-col space-y-3 px-4">
                <Link
                  to="/"
                  className="theme-header-link py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="theme-header-link py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="theme-header-link py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="flex items-center justify-between pt-3 border-t theme-border">
                  <span className="theme-header-link">Select Theme:</span>
                  <select
                    value={theme}
                    onChange={handleThemeChange}
                    className="theme-select bg-transparent border rounded py-1 px-2"
                  >
                    <option value="theme1">Minimalist</option>
                    <option value="theme2">Dark</option>
                    <option value="theme3">Colorful</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

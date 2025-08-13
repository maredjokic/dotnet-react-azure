import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../store/index";
import { toggleTheme } from "../store/themeSlice";
import { Sun, Moon } from "lucide-react";

const AppBar: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  const { user, logout } = useAuth();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="top-0 left-0 w-full bg-white text-gray-800 dark:bg-gray-900 dark:text-white shadow-md z-50 transition-colors duration-300">
      <nav className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo / Title */}
        <span className="font-bold text-xl">Extraction\converter tool</span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Switch */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-colors"
          >
            <span
              className={`absolute left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md transform transition-transform ${
                theme === "dark" ? "translate-x-6" : ""
              }`}
            >
              {theme === "dark" ? (
                <Moon className="w-4 h-4 text-blue-300" />
              ) : (
                <Sun className="w-4 h-4 text-yellow-500" />
              )}
            </span>
          </button>

          {/* Links */}
          <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/imagetotext" className="hover:text-blue-500 transition-colors">Extraction</Link>
          <Link to="/pricing" className="hover:text-blue-500 transition-colors">Pricing</Link>
          <Link to="/support" className="hover:text-blue-500 transition-colors">Support us</Link>

          {/* Auth Links */}
          {!user && (
            <>
              <Link to="/login" className="hover:text-blue-500 transition-colors">Login</Link>
              <Link to="/register" className="hover:text-blue-500 transition-colors">Register</Link>
            </>
          )}
          {user && (
            <button
              onClick={handleLogout}
              className="hover:text-red-400 transition-colors duration-200"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white" aria-label="Open menu">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default AppBar;

import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AppBar: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
  <header className="top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
    <nav className="container mx-auto px-4 flex items-center justify-between h-16">
      <span className="font-bold text-xl">Company Archive</span>
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
      </div>
      {!user && (
            <>
              <Link to="/login" className="hover:text-blue-400">Login</Link>
              <Link to="/register" className="hover:text-blue-400">Register</Link>
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
      
      <button className="md:hidden text-gray-300 hover:text-white" aria-label="Open menu">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  </header>
  );
};

export default AppBar;
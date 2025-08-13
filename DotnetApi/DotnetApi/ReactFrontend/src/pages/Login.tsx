import { useState } from "react";
import { api } from "../lib/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/api/auth/login", { email, password });
      alert("Successfully logged in!");
      const res = await api.get("/api/auth/me");
      setUser(res.data);
      navigate("/");
    } catch (err) {
      alert("Login error.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <form
        onSubmit={handleLogin}
        className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6 transition-colors duration-300"
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">Login</h2>
        
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1" htmlFor="password">Password</label>
          <input
            id="password"
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}
import { useState } from "react";
import { api } from "./../lib/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/login", { email, password });
      alert("Uspešno logovan!");
      console.log("Login response:", res.data);
      console.log(document);
    } catch (err) {
      alert("Greška pri logovanju.");
    }
    const res = await api.get("/api/auth/me");
      setUser(res.data);
      console.log(document);
  };

  return (
    <form onSubmit={handleLogin}>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
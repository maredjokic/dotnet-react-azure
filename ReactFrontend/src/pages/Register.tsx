import { useState } from "react";
import { api } from "./../lib/api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        console.log("Registering with:", { email, password });
      await api.post("/api/Auth/register", { email, password });
      alert("Registracija uspešna!");
    } catch (err) {
      alert("Greška pri registraciji.");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}
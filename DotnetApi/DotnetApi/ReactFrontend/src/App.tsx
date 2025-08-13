import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AppBar from "./components/AppBar";
import Home from "./pages/Home";
import Register from './pages/Register';
import Login from './pages/Login';
import ImageToText from './pages/ImageToText';
import Pricing from './pages/Pricing';
import Support from './pages/Support';

function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
      <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/imagetotext" element={<ImageToText />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

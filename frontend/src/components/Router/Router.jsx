import { BrowserRouter, Routes, Route } from "react-router-dom";

// Home
import Home from "@pages/Home";

// Vehicles
import Vehicles from "@pages/Vehicles";

// Contact
import Contact from "@pages/Contact";

// Auth
import Register from "@pages/Auth/Register";
import Login from "@pages/Auth/Login";

// Admin
import Dashboard from "@pages/Admin/Dashboard";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

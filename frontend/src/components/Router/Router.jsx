import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

// Home
import Home from "@pages/Home";

// Vehicles
import Vehicles from "@pages/Vehicles";
import Vehiclesid from "@pages/Vehiclesid";

// Contact
import Contact from "@pages/Contact";

// Auth
import Register from "@pages/Auth/Register";
import Login from "@pages/Auth/Login";
import Profile from "@pages/Auth/Profile";

// Admin
import Dashboard from "@pages/Admin/Dashboard";
import VehiclesAdmin from "@pages/Admin/VehiclesAdmin";
import VehicleForm from "@pages/Admin/VehicleForm";
import UserAdmin from "@pages/Admin/UsersAdmin";
import VehicleFormModify from "@pages/Admin/VehicleFormModify";

// Error
import Error from "@pages/Error";

// Context for Vehicles Rent
import SearchVehiclesRentContext from "../../contexts/searchVehiclesRentContext";

export default function Router() {
  const [searchVehiclesRentDetails, setSearchVehiclesRentDetails] = useState([
    {
      address: "",
      distance: "",
      passenger: "",
      date1: "",
      date2: "",
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <SearchVehiclesRentContext.Provider
              // eslint-disable-next-line react/jsx-no-constructed-context-values
              value={{
                searchVehiclesRentDetails,
                setSearchVehiclesRentDetails,
              }}
            >
              <Home />
            </SearchVehiclesRentContext.Provider>
          }
        />
        <Route
          path="/vehicles"
          element={
            <SearchVehiclesRentContext.Provider
              // eslint-disable-next-line react/jsx-no-constructed-context-values
              value={{
                searchVehiclesRentDetails,
                setSearchVehiclesRentDetails,
              }}
            >
              <Vehicles />
            </SearchVehiclesRentContext.Provider>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicles/:id" element={<Vehiclesid />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/vehicles" element={<VehiclesAdmin />} />

        <Route path="/admin/vehicles/add" element={<VehicleForm />} />
        <Route path="/admin/vehicles/:id" element={<VehicleFormModify />} />
        <Route path="/admin/users" element={<UserAdmin />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

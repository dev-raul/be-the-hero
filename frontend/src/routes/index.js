import React from "react";
import { Routes, Route } from "react-router-dom";
import Logon from "../pages/Logon";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import NewIncident from "../pages/NewIncident";

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Logon />} />
    <Route path="/register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/incident/new" element={<NewIncident />} />
  </Routes>
);

export default MainRoutes;

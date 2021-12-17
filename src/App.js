import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DadJokes from "./components/smallApps/DadJokes/DadJokes";
import Home from "./components/Home";
import LightsOut from "./components/smallApps/LightsOut.js/LightsOut";
import GroupsMaker from "./components/smallApps/IDC-GroupOrginze/GroupsMaker";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/lights-out" element={<LightsOut />} />
      <Route exact path="/dad-jokes" element={<DadJokes />} />
      <Route exact path="/groups-maker" element={<GroupsMaker />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

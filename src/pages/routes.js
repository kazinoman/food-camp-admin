import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Droper from "./Droper";
import Institute from "./Institute";
import Picker from "./Picker";
import Reports from "./Reports";
import Settings from "./Settings";
import ShareList from "./ShareList";

const PageRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="droper" element={<Droper />} />
        <Route path="picker" element={<Picker />} />
        <Route path="reports" element={<Reports />} />
        <Route path="institute" element={<Institute />} />
        <Route path="settings" element={<Settings />} />
        <Route path="sharelist" element={<ShareList />} />
      </Routes>
    </div>
  );
};

export default PageRoutes;

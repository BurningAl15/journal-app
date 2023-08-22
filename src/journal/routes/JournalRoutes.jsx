import React from "react";
import { Navigate, Router, Routes } from "react-router-dom";
import { JournalPage } from "../pages/JournalPage";

export const JournalRoutes = () => {
  return (
    <Routes>
      <Router path="/" element={<JournalPage />} />
      <Router path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

import React from "react";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import ResumeView from "./ResumeView";

const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cv/:resumeSlug" element={<ResumeView />} />
    </Routes>
  </BrowserRouter>
);

export default MainRouter;

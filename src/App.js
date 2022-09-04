import React from "react";
import { Route, Routes } from "react-router-dom";
import CodingPage from "./page/CodingPage";
import FrontPage from "./page/FrontPage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<h1>404 page not found</h1>} />
        <Route path="/" element={<FrontPage />} />
        <Route path="/CodingPage" element={<CodingPage />} />
      </Routes>
    </div>
  );
};

export default App;

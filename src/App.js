import React from "react";
import { Route, Routes } from "react-router-dom";
import FrontPage from "./page/FrontPage";
import Code from "./page/code";
import Error from "./page/error";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Error/>} />
        <Route path="/" element={<FrontPage />} />
        <Route path="/CodingPage" element={<Code />} />
      </Routes>
    </div>
  );
};

export default App;

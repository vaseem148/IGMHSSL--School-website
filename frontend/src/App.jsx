import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Singlepage from "./pages/Singlepage.jsx";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Singlepage/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart"
import Profilepage from "./pages/Profilepage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/styles.scss'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profilepage" element={<Profilepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

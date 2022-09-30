import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import OrderDetailPage from "./pages/orderdetailpage";
import YourOrderPage from "./pages/YourOrderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productDetailPage" element={<ProductDetailsPage />} />
        <Route path={"/orderDetailPage"} element={<OrderDetailPage />} />
        <Route path={"/yourOrderPage"} element={<YourOrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import OrderDetailPage from "./pages/orderdetailpage";
import YourOrderPage from "./pages/YourOrderPage";
import Header from "./pages/header";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productDetailPage" element={<ProductDetailsPage />} />
        <Route path={"/orderDetailPage"} element={<OrderDetailPage />} />
        <Route path={"/yourOrderPage"} element={<YourOrderPage />} />
        <Route path={"/header"} element={<Header />} />
        <Route path="/categoryPage" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./components/Pages/productsPage/products.page";
import SearchResultPage from "./components/Pages/searchResultPage/searchResult.page";
const ProductRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/searchresults" element={<SearchResultPage />} />
      </Routes>
    </Router>
  );
};

export default ProductRoutes;

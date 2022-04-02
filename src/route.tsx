import { Layout } from "antd";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavoritProductsPage from "./components/Pages/favoriteProductPage/favoriteProducts.page";
import NewProductsPage from "./components/Pages/newProductPage/newProduct.page";
import ProductsPage from "./components/Pages/productsPage/products.page";
import SearchResultPage from "./components/Pages/searchResultPage/searchResult.page";
const ProductRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<ProductsPage />} />
        <Route path="/searchresults" element={<SearchResultPage />} />
        <Route path="/favorites" element={<FavoritProductsPage />} />
        <Route path="/newproducts" element={<NewProductsPage />} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
};

export default ProductRoutes;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import NoteFoundPage from "./page/NoteFoundPage";
import AddProductPage from "./page/AddProductPage";
import ProductDetailsPage from "./page/ProductDetailsPage";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
        <Route path="*" element={<NoteFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

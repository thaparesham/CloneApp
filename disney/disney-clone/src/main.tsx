import "@fortawesome/fontawesome-free/css/all.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import TopPage from "./Toppage.tsx";
import ItemList from "./ItemList.tsx";
import ItemDetail from "./ItemDetail.tsx";
import { CartProvider } from "./CartContext";
import Login from "./Login";
import SignUp from "./SignUp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <Navbar />
        <TopPage />
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </CartProvider>
    </Router>
  </StrictMode>
);

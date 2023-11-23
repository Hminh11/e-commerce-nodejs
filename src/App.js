import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/js/dist/modal";
import ListProduct from "./components/Client/ListProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./components/Client/Home/Home";
import Login from "./components/common/Login/Login";
import Signup from "./components/common/Register/Register";
import ProductDetail from "./components/Client/ProductDetail";
import Logout from "./components/common/Logout/Logout";
import Search from "./components/Client/Search";
import Profile from "./components/common/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/dien-thoai" element={<ListProduct />}></Route>
        <Route path="/dien-thoai/:catId" element={<ListProduct />}></Route>
        <Route
          path="/dien-thoai/product-detail/:ID"
          element={<ProductDetail />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tim-kiem/:searchname" element={<Search />} />
        <Route path="/tim-kiem" element={<Search />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;

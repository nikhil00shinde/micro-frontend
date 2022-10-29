import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 

import "./index.scss";
import Footer from "home/Footer";
import Header from "home/Header";
import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";


import "remixicon/fonts/remixicon.css";


const MainLayout = () => (
  <BrowserRouter>
  <div className=" text-3xl mx-auto max-w-6xl">
    <Header/>
    <div className="my-10">
      <Routes>
        <Route exact path="/" element={<HomeContent/>}/>
        <Route path="/product/:id" element={<PDPContent/>}/>
        <Route path="/cart" element={<CartContent/>}/>
      </Routes>
    </div>
    <Footer/>
  </div>
  </BrowserRouter>
);

export default MainLayout;
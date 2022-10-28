import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";
import CardContend from "./CardContend";
import "remixicon/fonts/remixicon.css";


const App = () => (
  <div className="mx-auto max-w-6xl">
    <Header/>
    <div className="my-10">
       <CardContend/>
    </div>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

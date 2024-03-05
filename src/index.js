import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Header from "./component/Header";
import Cart from "./component/Cart";
import Routingcomp from "./component/Routingcomp"
import CheckoutPage from "./component/CheckoutPage";
 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
 
    {/* <CheckoutPage/> */}
     <BrowserRouter>
{/* <Routingcomp/> */}
<App />
 </BrowserRouter>
 {/* <h1>gfdgfdng</h1>  */}
     {/*  */}
  </>
);

import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./component/Home";
import Cart from "./component/Cart";
import { Routes,Route } from "react-router-dom";
import CheckoutPage from "./component/CheckoutPage";
// import CheckoutPage from "./component/CheckoutPage";

function App() {
  return (
    <div className="App">
    
      {/* <Header /> */}
      <Home/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      
     
      {/* <CheckoutPage/> */}
    </div>
  );
}

export default App;

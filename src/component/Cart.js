import React, { useState } from "react";
import Header from "./Home";
import CheckoutPage from "./CheckoutPage";
import { Link, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ fruits, setFruits, setHomeShow, show, setShow, count }) => {
  const [checkshow, setCheckShow] = useState(false);

  console.log(fruits);

  const handleDelete = (id) => {
    alert("Are you sure");
    const updatedlist = fruits.filter((item) => {
      return item.id !== id;
    });
    // console.log(updatedlist)

    setFruits(updatedlist);
  };

  return (
    <>
      {show && (
        <div className="cart-container">
          {fruits.length !== 0 ? (
            fruits.map((item, index) => {
              return (
                <div className="cartcard1" key={item.id}>
                  <div className="cartimg">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cartNames">
                    <p>{item.product}</p>
                    <p>{item.price * count[item.id-1]} </p> 
                    <p>{item.quantity * count[item.id-1]}Kg</p>
                    <div
                      onClick={() => handleDelete(item.id)}
                      className="delete"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="emptypage">
              <img className="empty-img" src="./etyBag.jpeg" alt="" />
              <p className="cart">{"Your cart is Empty"}</p>
            </div>
          )}

          <button
            className="proceed-btn"
            onClick={() => {
              setCheckShow(true);
              setHomeShow(false);
              setShow(false);
            }}
          >
            Proceed to checkout
          </button>
        </div>
      )}
      <CheckoutPage data={fruits} checkshow={checkshow} fruit={fruits} />

      {/* <Home/> */}
    </>
  );
};
//
export default Cart;

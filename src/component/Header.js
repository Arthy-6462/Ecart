import React from "react";
import Cart from "./Cart";
import { useState } from "react";
import { Link } from "react-router-dom";
import { items } from "./veg_data";
import Home from "./Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = ({ setHomeShow, setShow, show, fruits,serch, handlesearch,setserch }) => {
  // const addtocart = (item) => {
  //   setquery([...Cart, item]);
  // };
  // const removetocart = (item) => {
  //   setquery(query.filter((removeItem) => removeItem !== item));
  // };

  // console.log(filteritems);
  return (
    <>
      <div className="mainHeader">
        <div className="container1   " style={{ marginTop: "90px" }}>
          <div className="logo" onClick={() => setHomeShow(true)}>
            <h1>
              <span className="green">GREEN</span>
              <span className="kart">KART</span>
            </h1>
          </div>

          <div className="input-group  w-25">
            <input
              type="search"
              className="search"
              placeholder="Search for vegetables and fruits"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={serch}
              onChange={(e)=>setserch(e.target.value)}
              onKeyUp={handlesearch}

            />
            <button className="btn btn-success p-2 searchbtn">
              {/* <i className="fa fa-search" aria-hidden="true"></i> */}
              <FontAwesomeIcon icon={faSearch} color="#fff" />
            </button>
          </div>
          <div className="topdeal">
            <Link to="/topdeals">Top deals</Link>
          </div>
          <div className="flight">
            <a href="">Flight booking</a>
          </div>
          <div className="price">
            <div>Price:0</div>
            <div>Item:{fruits.length}</div>
          </div>
          <p>
            {" "}
            <div className="shopping-bag" onClick={() => setShow(!show)}>
              <div>
                <FontAwesomeIcon icon={faShoppingBag} size="lg" />
                {/* <i className="fa fa-shopping-bag shop"
                aria-hidden="true"></i> */}
              </div>
            </div>
          </p>
        </div>
      </div>

      {/* <Home  data={items} addtocart={addtocart} /> */}
    </>
  );
};

export default Header;
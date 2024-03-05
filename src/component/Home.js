import React, { useEffect, useState } from "react";
import { fruitsData } from "./Data";
import Cart from "./Cart";
import Header from "./Header";
// import Navbar from "./Navbar";

function DisplayData({ addtocart }) {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(fruitsData.map(() => 1));
  const [fruits, setFruits] = useState([]);
  const [cart, setCart] = useState(fruitsData.map(() => false));
  const [homeShow, setHomeShow] = useState(true);

  // ==========Serach============
  const [query, setquery] = useState(fruitsData);
  const [serch, setserch] = useState("");
  const [noItem, setNoItem] = useState(false);
  
  const handlesearch = () => {

    if(serch==""){
      setquery(query) 
    }
    const filteritems = fruitsData.filter((item) => {
      if(item.product.toLowerCase().includes(serch.toLowerCase())){
        return item;

      }
    });
    if (query.length === 0) {
      setNoItem("No Item Found", true);
    }
    setquery(filteritems);
  };
  // console.log(serch);
  //incrementing the product in home
  const handleincrement = (index) => {
    setCount((prevcount) => {
      const newcount = [...prevcount];
      newcount[index] += 1;

      return newcount;
    });
  };
  //  decrementing the product
  const handleDecrement = (index) => {
    setCount((prevcount) => {
      const newcount = [...prevcount];
      newcount[index] = Math.max(1, newcount[index] - 1);
      return newcount;
    });
  };

  // add to cart function
  const handleCart = (item, index) => {
    // const filterdata=fruitsData.filter((item)=>{
    //   // setCartdata(true)
    // return item.id===id

    // })

    setFruits([...fruits, item]);
    console.log(fruits);
    //cart items setup
    setCart((previtems) => {
      const newcart = [...previtems];
      newcart[index] = true;
      return newcart;
    });
  };
  console.log(query);
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <Header
          setHomeShow={setHomeShow}
          setShow={setShow}
          show={show}
          fruits={fruits}
          handlesearch={handlesearch}
          serch={serch}
          setserch={setserch}
        />
        {homeShow && (
          <div className="mt-5">
            <div className="display">
              {query.map((eachItem, index) => {
                return (
                  <div>
                    <div key={eachItem.id} className="card  ">
                      <img src={eachItem.image} alt={eachItem.product} />
                      <div className="card-body">
                        <h6>{eachItem.product} - 1 Kg</h6>
                        <h5>&#8377; {eachItem.price}</h5>
                        <div className="quantityChange">
                          <button
                            className="decbtn"
                            onClick={() => handleDecrement(index)}
                          >
                            -
                          </button>
                          <button className="mx-2 quntity">
                            {count[index]}
                          </button>
                          <button
                            className="incbtn"
                            onClick={() => handleincrement(index)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="cartbutton"
                          onClick={() => handleCart(eachItem, index)}
                        >
                          {" "}
                          {cart[index] ? "Added" : "Add to cart"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <h1>{noItem}</h1>
          </div>
        )}
        <Cart
          fruits={fruits}
          setHomeShow={setHomeShow}
          show={show}
          setShow={setShow}
          setFruits={setFruits}
          count={count}
        />
      </div>
    </>
  );
}

export default DisplayData;
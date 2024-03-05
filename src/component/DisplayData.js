import React, { useState } from "react";
import { fruitsData } from "./Data";
import Cart from './Cart';


function DisplayData() {
  const [count, setCount] = useState(fruitsData.map(() => 1));
  const[fruits,setFruits]=useState([])
  const [cart, setCart] = useState(fruitsData.map(() => false));

  
 
  const handleincrement = (index) => {
    setCount((prevcount)=>{
      const newcount=[...prevcount]
      newcount[index]+= 1;
     
      return newcount
    })
   
  };
  const handleDecrement = (index) => {
    setCount((prevcount)=>{
      const newcount=[...prevcount]
    newcount[index]=Math.max(1,newcount[index]-1) 
      return newcount;
    })
  };
// add to cart function
  const handleCart=(id,index)=>{
const filterdata=fruitsData.filter((item)=>{
  // setCartdata(true)
return item.id===id

})
setFruits([...fruits,filterdata])
console.log(fruits)
//cart items setup
setCart((previtems)=>{
  const newcart=[...previtems]
  newcart[index]=true
  return newcart
})
// console.log(eachItem)
  }
  return (
    <div className="display">
      {fruitsData.map((eachItem, index) => {
        return (
          <div>
            <div key={eachItem.id} className="card">
              <img src={eachItem.image} alt={eachItem.product} />
              <div className="card-body">
                <h6>{eachItem.product} - 1 Kg</h6>
                <h5>&#8377; {eachItem.price}</h5>
                <div className="quantityChange">
                  <button className="decbtn" onClick={()=>handleDecrement(index)}>
                    -
                  </button>
                  <button className="mx-2 quntity">{count[index]}</button>
                  <button className="incbtn" onClick={()=>handleincrement(index)}>
                    +
                  </button>
                </div>
                <button className="cartbutton" onClick={()=>handleCart(eachItem.id,index) }  > {cart[index] ? "Added" : "Add to cart"}</button>
              </div>
            </div>
          </div>
        );
      })}
    <Cart fruit={fruits}/>
    </div>
  );
}

export default DisplayData;

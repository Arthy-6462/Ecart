import React, { useState } from "react";
import Header from "./Header";

const CheckoutPage = ({ data, checkshow, fruit ,quantityincrement}) => {
  const [src, setsrc] = useState("");
  const HandleApply = () => {
    if (src === "") {
      alert("Plase Enter Promo Code");
    } else {
      alert("Appled Promo Code Successfully...!");
     
    }
  };
  const totalAmount = data.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const finalAmount = totalAmount - totalAmount * 0.1;

  return (
    <>
      {checkshow && (
        <div className="table">
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Product Image</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{item.id}</th>
                    <td className="d-flex justify-content-start align-items-start">
                      <img src={item.image} width={"50px"} alt="" />
                    </td>
                    
                    <td className="text-center">{item.product}</td>
                    <td className="text-center">{item.quantity}Kg</td>
                    <td className="text-center">{item.price}</td>
                    <td className="text-center">
                      {item.quantity * item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="promoWrapper">
              <input
                type="text"
                className="promoCode"
                placeholder="Enter promo code"
                onChange={(e) => setsrc(e.target.value)}
              />
              &nbsp;&nbsp;
              <button className="promoBtn" onClick={HandleApply}>
                Apply
              </button>
              <br />
            </div>
            <div
              className="summay"
              style={{
                textAlign: "left",
                width: "95%",
              }}
            >
              <b>No. of Items : {fruit.length}</b>
              <b className="totAmt"> Total Amount : {totalAmount}</b>{" "}
              <b className="discountPerc">Discount : 10%</b> {}
              <b className="discountAmt">
                {" "}
                Total After Discount : {quantityincrement()}
              </b>{" "}
              <br />
              <button className="promoBtn w-100">Place Order</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CheckoutPage;
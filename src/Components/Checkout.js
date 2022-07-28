import React from "react";
import "./Checkout.css";
import Ad from "../elements/ad.png";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <>
      <div className="checkout">
        <div className="checkout__left">
          <Link to="/">
            <div className="checkout__back__div">
              <button className="checkout__back">Back</button>
            </div>
          </Link>
          <div>
            <img className="checkout__ad" src={Ad} alt="logo"></img>
            <h3>
              {user ? "Hello," : ""} {user?.email}
            </h3>
            <h3 className="checkout__title">Your Shopping Basket</h3>
            {/*checkout product */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="checkout__right">
          {/* <h2>The subtotal will go here</h2> */}
          <Subtotal total={basket.length} />
        </div>
      </div>
      <div className="footer">
        <p className="footer__p">
          All Rights Are Reserved to 'Saksham Srivastava'
        </p>
      </div>
    </>
  );
}

export default Checkout;

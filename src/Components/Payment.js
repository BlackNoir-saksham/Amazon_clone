import React from "react";
import "./payment.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket }] = useStateValue();

  //   return (
  //     <div className="payment">
  //       <Link to="./checkout">
  //         <button className="payment__btn">Back</button>
  //       </Link>
  //       <h1>I am PAYMENT PAGE!</h1>
  //       <div className="payment__head">
  //         <h3>Checkout {basket.length} Items</h3>
  //         <hr></hr>
  //       </div>
  //       <div>Address</div>
  //       <hr />
  //       <div className="payment__review">
  //         <div className="payment__review__left">
  //           <p>Review Items & Delivery</p>
  //         </div>
  //         <div className="payment__review__right">
  //           {basket.map((item) => (
  //             <CheckoutProduct
  //               id={item.id}
  //               title={item.title}
  //               image={item.image}
  //               price={item.price}
  //               rating={item.rating}
  //             />
  //           ))}
  //         </div>
  //       </div>
  //       <hr/>
  //       <div className="payment__payment">
  //         <div className="payment__payment__left">
  //           <p>Payment Method</p>
  //         </div>
  //         <div className="payment__payment__right">
  //           <div className="total__sum">
  //             <h5>Order Total: ${getBasketTotal(basket)}</h5>
  //             <button className="payment__buynow">Buy Now</button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //);
  return (
    <>
      <div className="payment">
        <div className="payment__btn__div">
          <Link to="./checkout">
            <button className="payment__btn">Back</button>
          </Link>
        </div>
        <div className="payment__container">
          <h1>
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
          </h1>

          {/* Payment section - delivery address */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address: </h3>
            </div>
            <div className="payment__address">
              {/* <p>{user?.email}</p> */}
              <p>House No. 12 Block - H, Sector - 12</p>
              <p>Noida 201301</p>
            </div>
          </div>

          {/* Payment section - Review Items */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Review items and delivery: </h3>
            </div>
            <div className="payment__items">
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

          {/* Payment section - Payment method */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method: </h3>
            </div>
            <div className="payment__details">
              {/* Stripe magic will go */}

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button className="payment__buynow">
                  <b>Buy Now</b>
                </button>
              </div>
            </div>
          </div>
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

export default Payment;

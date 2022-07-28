import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import {FiShoppingCart} from 'react-icons/fi'
import {BsSearch} from 'react-icons/bs'
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

function Header() {
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const [{ basket, user }] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png "
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <BsSearch className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__option__1">{user? 'Hello' :'Hello Guest'} {user?.email}</span>
            <span className="header__option__2">
              {user ? "Sign-Out" : "Sign-In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__option__1">Returns</span>
          <span className="header__option__2">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option__1">Your</span>
          <span className="header__option__2">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__basket">
            <FiShoppingCart className = "cart__icon" ></FiShoppingCart>
             <span className="header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import img from "../elements/amazon-logo-transparent.png";
import "./Login.css";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <div className="login">
        <a href="/">
          <img className="login__logo" src={img} alt="logo"></img>
        </a>

        <div className="login__container">
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              onClick={signIn}
              className="login__signInButton"
            >
              Sign-in
            </button>
          </form>
          <p>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please
            see our provacy Notice, our Cookies Notice and our Interest-Based
            Ads Notice
          </p>
          <button onClick={register} className="login__registerButton">
            Create Your Amazon Account
          </button>
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

export default Login;

import React, { useEffect } from "react";
import "./App.css";
// import firebase from "firebase";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import { auth } from "./firebase";
import { useStateValue } from "./Components/StateProvider";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    // willl run once when app loads
    auth.onAuthStateChanged((authUser) => {
      console.log("User is >>> ", authUser);

      if (authUser) {
        // the user just logged in or was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

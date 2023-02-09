import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import { LOGO } from "../constants";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/">
      <img
        className="h-28 p-2"
        src={LOGO}
        alt="logo"
      ></img>
    </a>
  );
};


//A <Link> is an element that lets the user navigate to another page by clicking or tapping on it.
// In react-router-dom, a <Link> renders an accessible <a> element with a real href that points to the resource it's linking to. 

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useIsOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);


  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-items">

        <ul className="flex py-10">
          <span className="px-2 font-bold text-red-900">{user.name}</span>
          <li className="px-2">Status {isOnline ? '✅' : '🛑'}</li>
          <li className="px-2"><Link to="/">Home</Link></li>
          <li className="px-2"><Link to="/aboutUs">About Us</Link></li>
          <li className="px-2"><Link to="/contactUs">Contact Us</Link></li>
          <li className="px-2"><Link to="/instamart">Instamart</Link></li>
          <li className="px-2"><Link to="/cart">Cart -{cartItems.length} Items</Link></li>
          {isLoggedIn ? <button className="border bg-green-400" onClick={() => { setIsLoggedIn(false) }}>Log out</button> : <button className="border bg-red-400" onClick={() => setIsLoggedIn(true)}>Log In</button>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
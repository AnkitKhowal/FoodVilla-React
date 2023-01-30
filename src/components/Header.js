import React, { useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import { LOGO } from "../constants";

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
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-items">

        <ul className="flex py-10">
          <li>Status {isOnline ? '✅' : '🛑'}</li>
          <li className="px-2"><Link to="/">Home</Link></li>
          <li className="px-2"><Link to="/aboutUs">About Us</Link></li>
          <li className="px-2"><Link to="/contactUs">Contact Us</Link></li>
          <li className="px-2"><Link to="/instamart">Instamart</Link></li>
          {isLoggedIn ? <button className="border bg-green-400" onClick={() => { setIsLoggedIn(false) }}>Log out</button> : <button className="border bg-red-400" onClick={() => setIsLoggedIn(true)}>Log In</button>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
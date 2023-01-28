import React, { useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
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
    <div className="header">
      <Title />
      <div className="nav-items">
        <h1>{isOnline ? '✅' : '🛑'}</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutUs">About Us</Link></li>
          <li><Link to="/contactUs">Contact Us</Link></li>
          <li><Link to="/instamart">Instamart</Link></li>
          {isLoggedIn ? <button onClick={() => { setIsLoggedIn(false) }}>Log out</button> : <button onClick={() => setIsLoggedIn(true)}>Log In</button>}
          {console.log(isLoggedIn)};
        </ul>
      </div>
    </div>
  );
};

export default Header;
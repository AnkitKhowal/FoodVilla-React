import React, { useState } from "react";

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

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          {isLoggedIn ? <button onClick={() => { setIsLoggedIn(false) }}>Log out</button> : <button onClick={() => setIsLoggedIn(true)}>Log In</button>}
          {console.log(isLoggedIn)};
        </ul>
      </div>
    </div>
  );
};

export default Header;
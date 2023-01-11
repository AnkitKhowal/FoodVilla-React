import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";


// Plan you app first and then start writing you code
// Always Create Config driven UI
/**
 * Header
 *  - Logo(Title)
 *  - Nav Items( Right Side)
 *  - Cart
 * Body
 *  -SearchBar
 *  -RestaurantList
 *  - RestaurantCard(Many Cards)
 *      -Image
 *      -Rating
 *      -Cusines
 *  -Footer
 *      -links
 *      -copyright
 */

const Applayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);

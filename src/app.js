import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";
import RestaurantDetail from "./components/RestaurantDetail";
import Profile from "./components/Profile";
import Profile from "./components/ProfileClass";


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


//An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered.


const Applayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
        children: [{
          path: "profile",
          element: <Profile />
        }]
      },
      {
        path: "/contactUs",
        element: <ContactUs />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetail />
      },
    ]
  },
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

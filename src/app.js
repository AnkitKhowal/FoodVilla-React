import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";
import RestaurantDetail from "./components/RestaurantDetail";
import Profile from "./components/Profile";
import Profile from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";


//Code Splitting
//Dynamic Import 
//Chunking
//Lazy Loading
//On Demand Loading

const Instamart = lazy(() => import('./components/Instamart'));
const AboutUs = lazy(() => import('./components/AboutUs'));


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
  const [user, setUser] = useState({
    name: "Ankit Khowal",
    email: "ankitkhowal.nitb@gmail.com"
  });

  return (
    <React.Fragment>
      <UserContext.Provider value={{ user: user, setUser: setUser}}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
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
        element: <Suspense fallback={<h1>Loading ..</h1>}><AboutUs /></Suspense>,
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
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer />}>
          <Instamart />
        </Suspense>
      },
    ]
  },
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

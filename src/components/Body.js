import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterRestaurant } from "../utils/helper";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";

const Body = () => {

    //Use State should be defined inside a function
    //useState is a react hook
    //Used to define a local variable and its setter function

    const [searchValue, setSearchValue] = useState("");
    const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);

    const allRestaurantList  = useRestaurantList(setfilteredRestaurantList);


    const {user, setUser} = useContext(UserContext);

    //Early Return 
    // if (!allRestaurantList) return null;

    // Conditional Rendering
    return allRestaurantList?.length === 0 ? <Shimmer /> :
        <React.Fragment>
            <div className="search-bar p-5 bg-pink-50 my-5">
                <input type="text" className="search-input focus:bg-green-200 p-2 m-2" placeholder="Search" value={searchValue} onChange={
                    (event) => {
                        setSearchValue(event.target.value);
                    }
                }></input>
                <button data-testid="search-btn" className= "p-2 m-2 bg-purple-400 text-white rounded-md hover:bg-gray-500" onClick={(event) => {
                    const data = filterRestaurant(searchValue, allRestaurantList);
                    setfilteredRestaurantList(data);
                }
                }>Search</button>
                <input value={user.name} onChange={(e)=> setUser({
                    name : e.target.value,
                    email: user.email
                })}></input>
            </div>
            <div className="restaurant-list flex flex-wrap">{
                (filteredRestaurantList?.length === 0) ? <h1>No Restaurant Found</h1> :
                    filteredRestaurantList?.map((restaurant) => {
                        return (
                            <Link data-testid="res-list"
                                to={"/restaurant/" + restaurant.data.id}
                                key={restaurant.data.id}
                            >
                                <RestaurantCard  {...restaurant.data}></RestaurantCard>
                            </Link>
                        )
                    })
            }</div>
        </React.Fragment>
        ;
};

export default Body;
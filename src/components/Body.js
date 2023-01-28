import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterRestaurant } from "../utils/helper";
import useRestaurantList from "../utils/useRestaurantList";
import useIsOnline from "../utils/useIsOnline";

const Body = () => {

    //Use State should be defined inside a function
    //useState is a react hook
    //Used to define a local variable and its setter function

    const [searchValue, setSearchValue] = useState("");
    const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);
    const allRestaurantList  = useRestaurantList(setfilteredRestaurantList);

    //Early Return 
    // if (!allRestaurantList) return null;

    // Conditional Rendering
    return allRestaurantList?.length === 0 ? <Shimmer /> :
        <React.Fragment>
            <div className="search-bar">
                <input type="text" className="search-input" placeholder="Search" value={searchValue} onChange={
                    (event) => {
                        setSearchValue(event.target.value);
                    }
                }></input>
                <button id="search-btn" onClick={(event) => {
                    const data = filterRestaurant(searchValue, allRestaurantList);
                    setfilteredRestaurantList(data);
                }
                }>Search</button>
            </div>
            <div className="restaurant-list">{
                (filteredRestaurantList?.length === 0) ? <h1>No Restaurant Found</h1> :
                    filteredRestaurantList?.map((restaurant) => {
                        return (
                            <Link
                                to={"/restaurant/" + restaurant.data.id}
                                key={restaurant.data.id}
                            >
                                <RestaurantCard {...restaurant.data}></RestaurantCard>
                            </Link>
                        )
                    })
            }</div>
        </React.Fragment>
        ;
};

export default Body;
import RestaurantCard from "./RestaurantCard";
import { restrautList } from "../constants";
import React, { useState } from "react";

function filterRestaurant(searchValue) {
    console.log(searchValue);
    const data = restrautList.filter((restaurant) => {
        return restaurant.data.name.includes(searchValue);
    });
    return data;
};



const Body = () => {

    //Use State should be defined inside a function
    //useState is a react hook
    //Used to define a local variable and its setter function

    const [searchValue, setSearchValue] = useState("");
    const [restaurantList, setRestaurantList] = useState(restrautList);

    return (
        <React.Fragment>
            <div className="search-bar">
                <input type="text" className="search-input" placeholder="Search" value={searchValue} onChange={
                    (event) => {
                        setSearchValue(event.target.value);
                    }
                }></input>
                <button id="search-btn" onClick={(event) => {
                    const data = filterRestaurant(searchValue);
                    setRestaurantList(data);
                }
                }>Search</button>
            </div>
            <div className="restaurant-list">{
                restaurantList.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id}></RestaurantCard>
                })
            }</div>
        </React.Fragment>

    );
};

export default Body;
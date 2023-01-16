import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../constants";

function filterRestaurant(searchValue, restrautList) {
    console.log(searchValue);
    const data = restrautList.filter((restaurant) => {
        return restaurant.data.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    return data;
};



const Body = () => {

    //Use State should be defined inside a function
    //useState is a react hook
    //Used to define a local variable and its setter function

    const [searchValue, setSearchValue] = useState("");
    const [allRestaurantList, setAllRestaurantList] = useState();
    const [filteredRestaurantList, setfilteredRestaurantList] = useState();

    console.log("Rendering");

    async function getRestaurantList() {
        let data = await fetch(SWIGGY_URL);
        let jsonData = await data.json();
        setAllRestaurantList(jsonData?.data?.cards[2]?.data?.data?.cards);
        setfilteredRestaurantList(jsonData?.data?.cards[2]?.data?.data?.cards);
    }

    useEffect(() => {
        console.log("Use effect called");
        getRestaurantList();
    }, []);

    //Early Return 
    // if (!allRestaurantList) return null;

    // Conditional Rendering
    return allRestaurantList?.length === 0? <Shimmer /> : 
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
                        return <RestaurantCard {...restaurant.data} key={restaurant.data.id}></RestaurantCard>
                    })
            }</div>
        </React.Fragment>
    ;
};

export default Body;
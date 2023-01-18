import React, { useEffect, useState } from "react";
import { SWIGGY_MENU_URL, IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantDetail = () => {

    const { resId } = useParams();
    const [restaurantDetail, setRestaurantDetail] = useState(null);

    async function getRestaurantDetail() {
        const data = await fetch(SWIGGY_MENU_URL + resId);
        const restaurantData = await data.json();
        console.log(Object.values(restaurantData.data.menu.items).map((element) => element.name));
        setRestaurantDetail(restaurantData.data);
    }

    useEffect(() => {
        console.log("restaurantId", resId);
        getRestaurantDetail();
    }, []);

    return !restaurantDetail ? <Shimmer /> :
        <div className="restaurant-detail">
            <div>
                <h1 className="hotel-name">{restaurantDetail.name}</h1>
                <h3>{restaurantDetail?.area}</h3>
                <h3>{restaurantDetail?.city}</h3>
                <h3>{restaurantDetail?.avgRating} stars</h3>
                <h3>{restaurantDetail?.costForTwoMsg}</h3>
                <img src={IMG_CDN_URL + restaurantDetail.cloudinaryImageId}></img>
            </div>
            <div className="menu">
            <ol>
                {Object.values(restaurantDetail.menu.items).map((element) => <li>{element.name}</li>)}
            </ol>

            </div>
        </div>
}

export default RestaurantDetail;
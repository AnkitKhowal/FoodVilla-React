import { useEffect, useState } from "react";
import {SWIGGY_MENU_URL} from "../constants";

//This a custom hook
const useRestaurant = (resId) => {
    const [restaurantDetail, setRestaurantDetail] = useState(null);

    useEffect(() => {
        console.log("restaurantId", resId);
        getRestaurantDetail();
    }, []);

    async function getRestaurantDetail() {
        const data = await fetch(SWIGGY_MENU_URL + resId);
        const restaurantData = await data.json();
        setRestaurantDetail(restaurantData.data);
    };

    return restaurantDetail;
}

export default useRestaurant;
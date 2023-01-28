import { useEffect, useState } from "react";
import { SWIGGY_URL } from "../constants";

const useRestaurantList = (setfilteredRestaurantList) => {
    const [allRestaurantList, setAllRestaurantList] = useState([]);

    useEffect(() => {
        console.log("Use effect called");
        getRestaurantList();
    }, []);


    async function getRestaurantList() {
        let data = await fetch(SWIGGY_URL);
        let jsonData = await data.json();
        setAllRestaurantList(jsonData?.data?.cards[2]?.data?.data?.cards);
        setfilteredRestaurantList(jsonData?.data?.cards[2]?.data?.data?.cards);
    }

    return allRestaurantList;
}
export default useRestaurantList;
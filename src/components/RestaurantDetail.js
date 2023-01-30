import { IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantDetail = () => {

    const { resId } = useParams();
    const restaurantDetail = useRestaurant(resId);

    return !restaurantDetail ? <Shimmer /> :
        <div className="restaurant-detail m-5">
            <div className="flex bg-pink-50">
                <img className="m-5 p-2"src={IMG_CDN_URL + restaurantDetail.cloudinaryImageId}></img>
                <div className="rest-info m-20">
                    <h1 className="hotel-name text-lg font-bold">{restaurantDetail.name}</h1>
                    <h3>{restaurantDetail?.area}</h3>
                    <h3>{restaurantDetail?.city}</h3>
                    <h3>🌟 {restaurantDetail?.avgRating}</h3>
                    <h3>Cost {restaurantDetail?.costForTwoMsg}</h3>
                </div>

            </div>
            <div className="menu">
                <ol className="bg-scroll">
                    {Object.values(restaurantDetail.menu.items).map((element) => <li className="hover:text-pink-900">{element.name}</li>)}
                </ol>

            </div>
        </div>
}

export default RestaurantDetail;
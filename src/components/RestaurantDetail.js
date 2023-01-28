import { IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantDetail = () => {

    const { resId } = useParams();
    const restaurantDetail = useRestaurant(resId);

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
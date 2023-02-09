import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { IMG_CDN_URL } from "../constants";

const RestaurantCard = (props) => {
    const {user} = useContext(UserContext);
    return (
        <div className="card w-56 p-2 m-2 shadow-lg bg-pink-50  break-normal">
            <img
                src={
                    IMG_CDN_URL +props.cloudinaryImageId
                }
            ></img>
            <h2 className="font-bold text-xl">{props.name}</h2>
            <h3 className="break-all">{props.cuisines.join(",")}</h3>
            <h4>{props.lastMileTravelString} minutes</h4>
            <h5 className="font-bold">{user.name}- {user.email}</h5>
        </div>
    );
};

export default RestaurantCard;
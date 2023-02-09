
import {IMG_CDN_URL} from "../constants";

const FoodItem = ({name,description,  price , cloudinaryImageId}) =>{
    return(
        <div className="card w-56 p-2 m-2 shadow-lg bg-pink-50  break-normal">
            <img
                src={
                    IMG_CDN_URL +cloudinaryImageId
                }
            ></img>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3 className="font-bold text-xl">{description}</h3>
            <h4>Rs:{price/100}</h4>
        </div>
    )
};

export default FoodItem;
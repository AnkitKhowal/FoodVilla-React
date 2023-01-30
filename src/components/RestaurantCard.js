const RestaurantCard = (props) => {
    return (
        <div className="card w-56 p-2 m-2 shadow-lg bg-pink-50  break-normal">
            <img
                src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                    props.cloudinaryImageId
                }
            ></img>
            <h2 className="font-bold text-xl">{props.name}</h2>
            <h3 className="break-all">{props.cuisines.join(",")}</h3>
            <h4>{props.lastMileTravelString} minutes</h4>
        </div>
    );
};

export default RestaurantCard;
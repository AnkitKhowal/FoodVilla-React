const RestaurantCard = (props) => {
    return (
        <div className="card">
            <img
                src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                    props.cloudinaryImageId
                }
            ></img>
            <h2>{props.name}</h2>
            <h3>{props.cuisines.join(",")}</h3>
            <h4>{props.lastMileTravelString} minutes</h4>
        </div>
    );
};

export default RestaurantCard;
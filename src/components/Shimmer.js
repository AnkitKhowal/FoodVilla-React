
const Shimmer = () => {
    return (
        <div className="restaurant-list flex flex-wrap" data-testid="shimmer">
            {Array(20).fill("").map((e, index) => (<div className ="shimmer-card w-56 h-64 p-2 m-2 shadow-lg bg-pink-50"></div>))}
        </div>
    );
}

export default Shimmer;
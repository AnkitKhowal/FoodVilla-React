export function filterRestaurant(searchValue, restrautList) {
    console.log(searchValue);
    const data = restrautList.filter((restaurant) => {
        return restaurant.data.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    return data;
};
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () =>{
    // Do not subscribe to the whole store
    // Subsribe  only to the  slice which you want here
    // Whnever  the store changes reconcile will happen if anything in the 
    // store chnages  but when we subscribe  to speciific portion it saves  us
    // from reconcile cycle

    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart =() =>{
        dispatch(clearCart());
    }

    return(
        <div>
        <h1 className="m-2 p-2 text-xl">Cart Items - {cartItems.length}</h1>
        <button className="p-2 m-5 bg-pink-500" onClick={()=>handleClearCart()}>Clear Cart</button>
        <div className="flex">{cartItems.map((item)=><FoodItem key={item.id} {...item}/>)}</div>
        </div>
        
    )
};

export default Cart;
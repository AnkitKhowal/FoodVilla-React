import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
});

export default store;


/**
 * Create Store
 *  -configureStore() RTK(redux-toolkit)
 * 
 * Provide My Store to App
 *  -<Provider store={store}> - import from react-redux
 * 
 * Create Slice - RTK
 *  -createSlice({
 *      name: "",
 *      initialState
 *      reducers: {
 *          actionName: reducerFunction;
 *          addItem: (state, action) =>{ state = action.payload}
 *      }
 *  })
 * 
 *  - export const { additem, removeItem, clearCart } = cartSlice.actions
 *  - export default reducer
 * 
 * Put that Slice into the store
 *      - {
 *         cart: cartSlice,
 *         user: userSlice 
 *      }
 * 
 * Subscribe to the Store 
 */
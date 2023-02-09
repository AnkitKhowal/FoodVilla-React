import { createSlice } from "@reduxjs/toolkit";

//Slice of the store
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: ["Banana", "Apples"],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, ation) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

//Need to remember this
export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer;



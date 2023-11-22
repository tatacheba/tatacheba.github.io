import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        valueCart: {},
    },
    reducers: {
        increment: (state, value) => {
            let articul = value.payload;
            if (state.valueCart[articul] === undefined) {
                state.valueCart[articul] = 0;
            }
            state.valueCart[articul]++;
        },
        minus: () => {
            console.log("minus");
        },
        action_delete: (state, value) => {
            let articul = value.payload;
            console.log("value");
            console.log(value);
            console.log("state");
            console.log(state);
            // Use the spread operator to create a new object without the specified articul
            state.valueCart = { ...state.valueCart };
            delete state.valueCart[articul];
        },
    },
});

export const { increment, minus, action_delete } = cartSlice.actions;
export const selectCart = (state) => {
    return state.cart.valueCart;
};
export default cartSlice.reducer;

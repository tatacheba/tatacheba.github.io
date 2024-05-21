import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        valueCart: {},
    },
    reducers: {
        increment: (state, action) => {
            const { payload } = action;
            if (state.valueCart[payload] === undefined) {
                state.valueCart[payload] = 0;
            }
            state.valueCart[payload]++;
        },
        minus: (state, action) => {
            const { payload } = action;
            if (state.valueCart[payload] > 0) {
                state.valueCart[payload]--;
                if (state.valueCart[payload] === 0) {
                    delete state.valueCart[payload]; // Remove the item if its count reaches 0
                }
            }
        },
        action_delete: (state, action) => {
            const { payload } = action;
            delete state.valueCart[payload];
        },
    },
});

export const { increment, minus, action_delete } = cartSlice.actions;
export const selectCart = (state) => {
    return state.cart.valueCart;
};
export default cartSlice.reducer;

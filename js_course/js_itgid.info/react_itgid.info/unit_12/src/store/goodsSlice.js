import { createSlice } from "@reduxjs/toolkit";
import goodsArr from "../data/goods.json";

export const goodsSlice = createSlice({
    name: "goods",
    initialState: {
        products: goodsArr,
    },
    reducers: {},
});

export const {} = goodsSlice.actions;
export const selectGoods = (state) => {
    return state.goods.products;
};
export default goodsSlice.reducer;

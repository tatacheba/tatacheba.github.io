import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import Cart from "../components/Cart";
import { useDispatch } from "react-redux";
// import { selectGoods } from "../store/goodsSlice";

import { increment, minus, action_delete } from "../store/cartSlice";
function CartList() {
    // const goods = useSelector(selectGoods);
    const dispatch = useDispatch();
    let clickHandler = (event) => {
        event.preventDefault();
        let t = event.target;
        if (!t.classList.contains("remove-button")) return true;
        // Extract the articul from the button's dataset
        let articul = t.dataset.articul;
        console.log("Clicked remove button with articul:", articul);
        console.log("Clicked remove button with articul:", t);

        // Ensure that articul is not undefined before dispatching
        if (articul !== undefined) {
            // Dispatch the action_delete action with the articul as payload
            dispatch(action_delete({ payload: articul }));
        }
    };
    return (
        <div>
            <div className="cart-block" onClick={clickHandler}>
                <img alt="" />
                <Cart />
            </div>
        </div>
    );
}
export default CartList;

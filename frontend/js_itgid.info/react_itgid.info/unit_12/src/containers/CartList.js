import React from "react";
import Cart from "../components/Cart";
import { useDispatch, useSelector } from "react-redux";

import { minus, action_delete, selectCart } from "../store/cartSlice";
function CartList() {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    const clickHandler = (event) => {
        event.preventDefault();
        const target = event.target;

        if (target.classList.contains("remove-button")) {
            const articul = target.dataset.articul;

            if (articul) {
                dispatch(action_delete(target.getAttribute("data-articul")));
            }
        } else if (target.classList.contains("quantity-button")) {
            const articul = target.dataset.articul;

            if (articul) {
                dispatch(minus(target.getAttribute("data-articul")));
            }
        }
    };
    return (
        <div className="cart-block" onClick={clickHandler}>
            <Cart cart={cart} />
        </div>
    );
}
export default CartList;

import React from "react";
import { useSelector } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import { selectCart } from "../store/cartSlice";

function Cart(props) {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const goodsObject = goods.reduce((accum, item) => {
        accum[item["articul"]] = item;
        return accum;
    }, {});
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">Наименование</th>
                    <th>Цена за шт.</th>
                    <th colSpan="2">Количество</th>
                    <th>Стоимость</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(cart).map((key) => (
                    <tr key={key}>
                        <td>
                            <button className="remove-button">{key}X</button>
                        </td>
                        <td>{goodsObject[key]["title"]}</td>
                        <td>$10.00</td>

                        <td className="quantity">{cart[key]}</td>
                        <td>
                            <button className="quantity-button">-</button>
                        </td>

                        <td>$20.00</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Cart;

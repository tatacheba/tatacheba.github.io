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
                    <th colSpan="3">Количество</th>
                    <th>Стоимость</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(cart).map((key) => (
                    <tr key={key}>
                        <td>
                            <img
                                src={goodsObject[key]["image"]}
                                alt=""
                                srcset=""
                            />
                        </td>
                        <td>{goodsObject[key]["title"]}</td>
                        <td>${goodsObject[key]["cost"]}</td>
                        <td className="quantity">{cart[key]}</td>
                        <td>
                            <button
                                className="quantity-button"
                                data-articul={key}
                            >
                                -
                            </button>
                        </td>
                        <td>
                            <button
                                className="remove-button"
                                data-articul={key}
                            >
                            </button>
                        </td>
                        <td>${cart[key] * goodsObject[key]["cost"]}</td>
                    </tr>
                ))}
                <tr>
                    <td>ИТОГО</td>
                    <td colSpan="5"></td>
                    <td>
                        $
                        {Object.keys(cart).reduce(
                            (total, key) =>
                                total + cart[key] * goodsObject[key]["cost"],
                            0
                        )}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Cart;

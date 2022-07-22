import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = ({ id, key, name, description, price }) => {
    const cartCtx = useContext(CartContext);

    const formattedPrice = `₹${parseFloat(price).toFixed(2)}`

    const addItemToCartHandler = amount => {
        cartCtx.addItem({
            id,
            name,
            amount,
            price,
        })
    }
    return (
        <li key={key} className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{formattedPrice}</div>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart={addItemToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem;
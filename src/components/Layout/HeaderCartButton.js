import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = ({ onClick }) => {

    const [btnHighlighted, setBtnHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx
    const cartItemsNum = items.reduce((currIndex, item) => {
        return currIndex + item.amount;
    }, 0)


    const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setBtnHighlighted(true)
        const timer = setTimeout(() => {
            setBtnHighlighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])
    return (
        <button className={btnClasses} onClick={onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartItemsNum}</span>
        </button>
    )
}

export default HeaderCartButton;
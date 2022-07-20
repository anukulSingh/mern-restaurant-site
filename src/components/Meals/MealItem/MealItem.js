import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = ({ id, key, name, description, price }) => {

    const formattedPrice = `$${parseFloat(price).toFixed(2)}`
    return (
        <li key={key} className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{formattedPrice}</div>
            </div>
            <div>
                <MealItemForm id={id} />
            </div>
        </li>
    )
}

export default MealItem;
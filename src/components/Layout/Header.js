import HeaderCartButton from "./HeaderCartButton";
import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = ({ onShowcart }) => {
    return (
        <>
           <header className={classes.header}>
                <h1>MealsOrder</h1>
                <HeaderCartButton onClick={onShowcart} />
            </header> 
            <div className={classes["main-img"]}>
                <img src={mealImage} alt="A table of delicious food" width="100%" />
            </div>
        </>
    )
}

export default Header;
import React from "react";
import styles from "./Header.module.css"
import Logo from "./logo/logo";
import Search from "./search/search";
import Basket from "./basket/basket";
import Burger from "./burger/burger";

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo/>
            <Search/>
            <Basket/>
            <Burger/>
        </div>
    )
}

export default Header
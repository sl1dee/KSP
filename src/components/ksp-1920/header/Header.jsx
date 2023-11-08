import React from "react";
import styles from "./Header.module.css"
import Logo from "./logo/logo";
import Search from "./search/search";
import Phone from "./phone/phone";
import Basket from "./basket/basket";
import Burger from "./burger/burger";

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo/>
            <Search/>
            <Phone/>
            <Basket/>
            <Burger/>
        </div>
    )
}

export default Header
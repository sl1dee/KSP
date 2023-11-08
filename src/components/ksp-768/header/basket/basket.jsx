import React from 'react';
import styles from "./basket.module.css";
import basket from "../../../../assets/ksp-768/icons/shopping-cart.svg";
import ellipse from "../../../../assets/ksp-768/icons/group1.svg";

const Basket = () => {
    return (
        <div className={styles.header__basket}>
            <div className={styles.header__basket__group}>
                <img src={basket} alt="" className={styles.header__basket__logo}/>
                <img src={ellipse} alt="" className={styles.header__basket__count}/>
            </div>
        </div>
    );
};

export default Basket;
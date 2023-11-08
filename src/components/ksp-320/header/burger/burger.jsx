import React from 'react';
import burger from "../../../../assets/ksp-320/icons/Burger.svg";
import styles from "./burger.module.css"

const Burger = () => {
    return (
        <div className={styles.burger}>
            <img src={burger} alt=""/>
        </div>
    );
};

export default Burger;
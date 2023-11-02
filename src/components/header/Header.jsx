import logo from "../../images/Full_logo.svg";
import phone from "../../images/phone-call.svg"
import basket from "../../images/shopping-cart.svg"
import burger from "../../images/Burger.svg"
import ellipse from "../../images/group1.svg"
import React from "react";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={logo} alt="" className={styles.header__logo}/>
            <input className={styles.header__input} type="text" placeholder="Наименование, номер запчасти или VIN. Например: 123123123123"/>
            <button className={styles.header__btn}>Найти</button>
            <div className={styles.header__phone}>
                <img src={phone} alt="" className={styles.header__phone__logo}/>
                <div className={styles.header__phone__number}>+7 (915) 123-45-67</div>
            </div>
            <div className={styles.header__basket}>
                <div className={styles.header__basket__group}>
                    <img src={basket} alt="" className={styles.header__basket__logo}/>
                    <img src={ellipse} alt="" className={styles.header__basket__count}/>
                </div>
                <div className={styles.header__basket__price}>170 550 Р</div>
            </div>
            <img src={burger} alt=""/>
        </div>
    )
}

export default Header
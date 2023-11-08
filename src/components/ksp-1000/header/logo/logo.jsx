import React from 'react';
import logo from "../../../../assets/ksp-1000/images/Full_logo.svg";
import styles from "./logo.module.css";

const Logo = () => {
    return (
        <div>
            <img src={logo} alt="" className={styles.header__logo}/>
        </div>
    );
};

export default Logo;
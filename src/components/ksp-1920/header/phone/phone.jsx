import React from 'react';
import phone from "../../../../assets/ksp-1920/icons/phone-call.svg";
import styles from "./phone.module.css";

const Phone = () => {
    return (
        <div className={styles.container}>
            <img src={phone} alt="" className={styles.header__phone__logo}/>
            <div className={styles.header__phone__number}>+7 (915) 123-45-67</div>
        </div>
    );
};

export default Phone;
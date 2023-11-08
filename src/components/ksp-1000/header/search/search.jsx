import React from 'react';
import styles from "./search.module.css";

const Search = () => {
    return (
        <div className={styles.search}>
            <input className={styles.header__input} type="text"
                   placeholder="Наименование, номер запчасти или VIN"/>
            <button className={styles.header__btn}>Найти</button>
        </div>
    );
};

export default Search;
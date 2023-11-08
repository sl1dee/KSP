import React from 'react';
import styles from "./search.module.css";

const Search = () => {
    return (
        <div className={styles.search}>
            <input className={styles.header__input} type="text"
                   placeholder="Наименование, номер запчасти или VIN"/>
        </div>
    );
};

export default Search;
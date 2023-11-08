import React from 'react';
import styles from "./search.module.css";
import search from "../../../../assets/ksp-320/icons/search.svg"
const Search = () => {
    return (
        <div className={styles.search}>
            <img src={search} alt=""/>
        </div>
    );
};

export default Search;
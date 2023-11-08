import React from 'react';
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import styles from "./ksp1920.module.css"

const Ksp1920 = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default Ksp1920;
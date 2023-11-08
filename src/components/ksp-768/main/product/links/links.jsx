import React from 'react';
import styles from "./links.module.css";

const Links = () => {
    return (
        <div className={styles.product__paths}>
            <p><a href="#" className={styles.link__path}>Главная</a> - <a href="#" className={styles.link__path}>Hyundai
                Sonata Тагаз</a> - <a href="#" className={styles.link__path}>Hyundai Sonata Тагаз, G4GC</a> -</p>
            <p><a href="#" className={styles.link__path}>Кронштейн фары противотуманной левой</a> -</p>
            <p><a href="#" className={styles.current__link}>Кронштейн фары противотуманной левой для Hyundai Sonata VI
                2010-2014 БУ состояни...</a></p>
        </div>
    );
};

export default Links;
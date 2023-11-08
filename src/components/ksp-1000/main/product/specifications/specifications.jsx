import React from 'react';
import styles from "./specifications.module.css";

const Specifications = () => {
    return (
        <div className={styles.haracteristiki}>
            <div className={styles.level2}>
                <h4 className={styles.specifications}>Характеристики</h4>
                <h4 className={styles.reviews}>Отзывы о поставщике</h4>
            </div>
            <div className={styles.description}>
                <div>
                    <div className={styles.description__names}>
                        <p className={styles.names}>Артикул</p>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles.description__names}>
                        <p className={styles.names}>Ширина, мм</p>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles.description__names}>
                        <p className={styles.names}>Производитель</p>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles.description__names}>
                        <p className={styles.names}>Диаметр, дюймы</p>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles.description__names}>
                        <p className={styles.names}>Состояние (б/у)</p>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles.description__names}>
                        <p className={styles.names}>Гарантия</p>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles.description__names}>
                        <p className={styles.names}>Вес</p>
                        <div className={styles.underline}></div>
                    </div>
                </div>

                <div>
                    <div className={styles.description__values}>
                        <p className={styles.values}>14848284</p>
                        <div className={styles.underline2}></div>
                    </div>
                    <div className={styles.description__values}>
                        <p className={styles.values}>185</p>
                        <div className={styles.underline2}></div>
                    </div>
                    <div className={styles.description__values}>
                        <p className={styles.values}>Hyundai-Kia</p>
                        <div className={styles.underline2}></div>
                    </div>
                    <div className={styles.description__values}>2
                        <p className={styles.values}>15</p>
                        <div className={styles.underline2}></div>
                    </div>
                    <div className={styles.description__values}>
                        <p className={styles.values}>Удовлетворительное</p>
                        <div className={styles.underline2}></div>
                    </div>
                    <div className={styles.description__values}>
                        <p className={styles.values}>Гарантия 14 дн</p>
                        <div className={styles.underline2}></div>
                    </div>
                    <div className={styles.description__values}>
                        <p className={styles.values}>0,2 кг (точный)</p>
                        <div className={styles.underline2}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specifications;
import React from 'react';
import product from "../../../../../assets/ksp-320/images/product.svg";
import styles from "./productCard.module.css";
import ratestar from "../../../../../assets/ksp-320/icons/Rate star.svg";
import heart from "../../../../../assets/ksp-320/icons/heart.svg";

const ProductCard = () => {

    let clicks = 0;
    function plus() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    }
    function minus() {
        if (clicks <= 0) {
            return 0
        } else {
            clicks -= 1;
            document.getElementById("clicks").innerHTML = clicks;
        }
    }

    return (
        <div className={styles.product__card}>
            <img src={product} alt="" className={styles.product__photo}/>
            <div className={styles.product__info}>
                <h3 className={styles.product__name}>Кронштейн фары противотуманной левой для Hyundai Sonata VI
                    2010-2014 БУ состояние удовлетворительное</h3>
                <h2 className={styles.product__price}>743 Р</h2>
                <div className={styles.product__description}>
                    <p className={styles.product__description__number}>Номер товара: 92101G6000</p>
                    <p className={styles.product__description__manufacturer}>Производитель: Atek</p>
                    <p className={styles.product__description__rate}>
                        <div>Рейтинг: 4,5</div>
                        <img src={ratestar} alt=""/>
                    </p>
                </div>
                <div className={styles.product__btns}>
                    <div className={styles.count}>
                        <button type="button" onClick={minus} className={styles.count__btn}>-</button>
                        <div><a id="clicks" className={styles.count__number}>{clicks}</a></div>
                        <button type="button" onClick={plus} className={styles.count__btn}>+</button>
                    </div>
                    <button className={styles.basket__btn}>В корзину</button>
                    <button className={styles.favourites__btn}>
                        <img src={heart} alt=""/>
                    </button>
                </div>
                <div className={styles.availability}>
                    <div className={styles.availability__text}>В наличии:</div>
                    <div className={styles.availability__value}>3 шт</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
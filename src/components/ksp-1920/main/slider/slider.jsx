import React from 'react';
import styles from "./slider.module.css";
import chevronleft from "../../../../assets/ksp-1920/icons/chevron-left.svg";
import othProduct1 from "../../../../assets/ksp-1920/images/Rectangle 11.svg";
import rating1 from "../../../../assets/ksp-1920/icons/Rate1.svg";
import othProduct2 from "../../../../assets/ksp-1920/images/Rectangle 12.svg";
import rating2 from "../../../../assets/ksp-1920/icons/Rate2.svg";
import othProduct3 from "../../../../assets/ksp-1920/images/Rectangle 13.svg";
import rating3 from "../../../../assets/ksp-1920/icons/Rate3.svg";
import othProduct4 from "../../../../assets/ksp-1920/images/Rectangle 14.svg";
import rating4 from "../../../../assets/ksp-1920/icons/Rate4.svg";
import chevronright from "../../../../assets/ksp-1920/icons/chevron-right.svg";

const Slider = () => {
    return (
        <div>
            <h2 className={styles.others__products__header}>Другие товары в этой категории</h2>
            <div className={styles.others__products__grid}>
                <div>
                    <img src={chevronleft} alt="" className={styles.chevronleft}/>
                </div>
                <div className={styles.product__cards}>
                    <div className={styles.product__cards__dop}>
                        <img src={othProduct1} alt="" className={styles.product__cards__photo}/>
                        <div className={styles.product__cards__name}>Кронштейн фары противотуманной левой для Hyundai
                            Sonata VI 2010-2014 БУ состояние удовлетвор...
                        </div>
                        <div className={styles.rate}>
                            <img src={rating1} alt="" className={styles.rate__stars}/>
                            <div className={styles.rate__number}>4,4</div>
                        </div>
                        <h4 className={styles.product__cards__price}>590 руб.</h4>
                        <div className={styles.product__cards__term}>от 6 дней</div>
                    </div>
                </div>

                <div className={styles.product__cards}>
                    <div className={styles.product__cards__dop}>
                        <img src={othProduct2} alt="" className={styles.product__cards__photo}/>
                        <div className={styles.product__cards__name}>Крепление фары левой Hyundai Sonata VI (YF) 2009 -
                            2014 2013
                        </div>
                        <div className={styles.rate}>
                            <img src={rating2} alt="" className={styles.rate__stars}/>
                            <div className={styles.rate__number}>4,4</div>
                        </div>
                        <h4 className={styles.product__cards__price}>1083 руб.</h4>
                        <div className={styles.product__cards__term}>от 4 дней</div>
                    </div>
                </div>
                <div className={styles.product__cards}>
                    <div className={styles.product__cards__dop}>
                        <img src={othProduct3} alt="" className={styles.product__cards__photo}/>
                        <div className={styles.product__cards__name}>Кронштейн фары противотуманной левой для Hyundai
                            Sonata VI 2010-2014 новая
                        </div>
                        <div className={styles.rate}>
                            <img src={rating3} alt="" className={styles.rate__stars}/>
                            <div className={styles.rate__number}>3,5</div>
                        </div>
                        <h4 className={styles.product__cards__price}>1487 руб.</h4>
                        <div className={styles.product__cards__term}>от 4 дней</div>
                    </div>
                </div>
                <div className={styles.product__cards}>
                    <div className={styles.product__cards__dop}>
                        <img src={othProduct4} alt="" className={styles.product__cards__photo}/>
                        <div className={styles.product__cards__name}>Кронштейн фары противотуманной левой для Hyundai
                            Sonata VI 2010-2014 БУ состояние удовлетворительное
                        </div>
                        <div className={styles.rate}>
                            <img src={rating4} alt="" className={styles.rate__stars}/>
                            <div className={styles.rate__number}>4,4</div>
                        </div>
                        <h4 className={styles.product__cards__price}>560 руб.</h4>
                        <div className={styles.product__cards__term}>от 7 дней</div>
                    </div>
                </div>
                <div>
                    <img src={chevronright} alt="" className="chevronright"/>
                </div>
            </div>
        </div>
    );
};

export default Slider;
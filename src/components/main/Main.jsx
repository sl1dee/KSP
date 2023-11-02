import product from "../../images/product.svg";
import othProduct1 from "../../images/Rectangle 11.svg"
import othProduct2 from "../../images/Rectangle 12.svg"
import othProduct3 from "../../images/Rectangle 13.svg"
import othProduct4 from "../../images/Rectangle 14.svg"
import rating1 from "../../images/Rate1.svg"
import rating2 from "../../images/Rate2.svg"
import rating3 from "../../images/Rate3.svg"
import rating4 from "../../images/Rate4.svg"
import ratestar from "../../images/Rate star.svg"
import heart from "../../images/heart.svg"
import chevronleft from "../../images/chevron-left.svg"
import chevronright from "../../images/chevron-right.svg"
import styles from "./Main.module.css"
const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.product__paths}>
                <p><a href="#" className={styles.link__path}>Главная</a> - <a href="#" className={styles.link__path}>Hyundai Sonata Тагаз</a> - <a href="#" className={styles.link__path}>Hyundai Sonata Тагаз, G4GC</a> - <a href="#" className={styles.link__path}>Кронштейн фары противотуманной левой</a> -</p>
                <p><a href="#" className={styles.current__link}>Кронштейн фары противотуманной левой для Hyundai Sonata VI 2010-2014 БУ состояние удовлетворительное</a></p>
            </div>

            <div className={styles.product__card}>
                <img src={product} alt="" className={styles.product__photo}/>
                <div className={styles.product__info}>
                    <h3 className={styles.product__name}>Кронштейн фары противотуманной левой для Hyundai Sonata VI 2010-2014 БУ состояние удовлетворительное</h3>
                    <h2 className={styles.product__price}>743 Р</h2>
                    <div className={styles.product__description}>
                        <p className={styles.product__description__number}>Номер товара: 92101G6000</p>
                        <p className={styles.product__description__manufacturer}>Производитель: Atek</p>
                        <p className={styles.product__description__rate}>
                            <div>Рейтинг: 4,5 </div>
                            <img src={ratestar} alt=""/>
                        </p>
                    </div>
                    <div className={styles.product__btns}>
                        <div className={styles.count}><div>-</div><div>2</div><div>+</div></div>
                        <button className={styles.basket__btn}>В корзину</button>
                        <button className={styles.favourites__btn}>
                            <div><img src={heart} alt=""/></div>
                            <div className={styles.favourites__text}>В избранное</div>
                            <div><img src={heart} alt=""/></div>
                        </button>
                    </div>
                    <div className={styles.availability}>
                        <div className={styles.availability__text}>В наличии: </div>
                        <div className={styles.availability__value}>3 шт</div>
                    </div>
                </div>
            </div>

            <div className={styles.haracteristiki}>
                <div className={styles.level2}>
                    <h4 className={styles.specifications}>Характеристики</h4>
                    <h4 className={styles.reviews}>Отзывы о поставщике</h4>
                </div>
                <div className={styles.description}>
                    <div className={styles.description__names}>
                        <p className={styles.names}>Артикул</p>
                        <p className={styles.names}>Ширина, мм</p>
                        <p className={styles.names}>Производитель</p>
                        <p className={styles.names}>Диаметр, дюймы</p>
                        <p className={styles.names}>Состояние (б/у)</p>
                        <p className={styles.names}>Гарантия</p>
                        <p className={styles.names}>Вес</p>
                    </div>
                    <div className={styles.description__values}>
                        <p className={styles.values}>14848284</p>
                        <p className={styles.values}>185</p>
                        <p className={styles.values}>Hyundai-Kia</p>
                        <p className={styles.values}>15</p>
                        <p className={styles.values}>Удовлетворительное</p>
                        <p className={styles.values}>Гарантия14 дн</p>
                        <p className={styles.values}>0,2 кг (точный)</p></div>
                </div>
            </div>
            <h2 className={styles.others__products__header}>Другие товары в этой категории</h2>
            <div className={styles.others__products__grid}>
                <div>
                    <img src={chevronleft} alt="" className={styles.chevronleft}/>
                </div>
                <div className={styles.product__cards}>

                    <div className={styles.product__cards__dop}>
                        <img src={othProduct1} alt="" className={styles.product__cards__photo}/>
                        <div className={styles.product__cards__name}>Кронштейн фары противотуманной левой для Hyundai Sonata VI 2010-2014 БУ состояние удовлетворительное</div>
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
                        <div className={styles.product__cards__name}>Крепление фары левой Hyundai Sonata VI (YF) 2009 - 2014 2013</div>
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
                        <div className={styles.product__cards__name}>Кронштейн фары противотуманной левой для Hyundai Sonata VI 2010-2014 новая</div>
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
                        <div className={styles.product__cards__name}>Кронштейн фары противотуманной левой для Hyundai Sonata VI 2010-2014 БУ состояние удовлетворительное</div>
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
    )
}

export default Main
import logos from "../../../assets/ksp-320/images/logos.svg"
import styles from "./Footer.module.css"
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__columns}>
                <div className={styles.column}>
                    <img src={logos} alt="" className={styles.footer__logos}/>
                </div>
                <div className={styles.column}>
                    <ul>
                        <li>
                            <p className={styles.column__header}>Подбор запчастей</p>
                        </li>
                        <li>
                            <a href="#" className={styles.column__link}>Подбор запчастей по VIN</a>
                        </li>
                        <li>
                            <a href="#" className={styles.column__link}>Подбор запчастей по марке автомобиля</a>
                        </li>
                        <li>
                            <a href="#" className={styles.column__link}>Запчасти для KIA</a>
                        </li>
                        <li>
                            <a href="#" className={styles.column__link}>Запчасти для Hyundai</a>
                        </li>
                        <li>
                            <a href="#" className={styles.column__link}>Запчасти для Chevrolet</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <ul>
                        <li>
                            <p className={styles.column__header}>Покупателю</p>
                        </li>
                        <li>
                            <a href="#" className={styles.column__link}>Помощь с подбором</a>
                        </li>
                        <li>
                            <a href="#" className={styles.column__link}>Доставка</a>
                        </li>
                        <li>
                            <a href="#" className={styles.column__link}>Возврат</a>
                        </li>
                        <li>
                            <a href="#" className={styles.column__link}>Оплата</a>
                        </li>
                        <li>
                            <a href="#" className={styles.column__link}>Гарантия</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <ul>
                        <li>
                            <p className={styles.column__header}>Компания</p>
                        </li>
                        <li>
                            <a href="#" className={styles.column__link}>О компании</a>
                        </li>
                        <li>
                            <a href="#" className={styles.column__link}>Новости</a>
                        </li>
                        <li>
                            <a href="#" className={styles.column__link}>Вакансии</a>
                        </li>
                        <li>
                            <a href="#" className={styles.column__link}>Акции</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <ul>
                        <li>
                            <p className={styles.column__header}>Поставщикам</p>
                        </li>
                        <li>
                            <a href="#" className={styles.column__link}>Стать поставщиком</a>
                        </li>
                        <li>
                            <a href="#" className={styles.column__link}>Условия</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <div>
                        <ul>
                            <li>
                                <p className={styles.column__header}>Контакты</p>
                            </li>
                            <li>
                                <a className={styles.column__link}>+7 (915) 123-45-67</a>
                            </li>
                            <li>
                                <a className={styles.column__link}>example@mail.ru</a>
                            </li>
                            <li>
                                <a className={styles.column__link}>Казахстан, г. Астана, ул. Первая, д. 15</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footer__end}>
                    <div className={styles.footer__end__1}>Политика конфиденциальности</div>
                    <div>Разработка сайта - Амбити</div>
                </div>
            </div>
        </div>

    )
}

export default Footer
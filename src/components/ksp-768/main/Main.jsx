import product from "../../../assets/ksp-1920/images/product.svg";
import othProduct1 from "../../../assets/ksp-1920/images/Rectangle 11.svg"
import othProduct2 from "../../../assets/ksp-1920/images/Rectangle 12.svg"
import othProduct3 from "../../../assets/ksp-1920/images/Rectangle 13.svg"
import othProduct4 from "../../../assets/ksp-1920/images/Rectangle 14.svg"
import rating1 from "../../../assets/ksp-1920/icons/Rate1.svg"
import rating2 from "../../../assets/ksp-1920/icons/Rate2.svg"
import rating3 from "../../../assets/ksp-1920/icons/Rate3.svg"
import rating4 from "../../../assets/ksp-1920/icons/Rate4.svg"
import ratestar from "../../../assets/ksp-1920/icons/Rate star.svg"
import heart from "../../../assets/ksp-1920/icons/heart.svg"
import chevronleft from "../../../assets/ksp-1920/icons/chevron-left.svg"
import chevronright from "../../../assets/ksp-1920/icons/chevron-right.svg"
import styles from "./Main.module.css"
import Product from "./product/product";
import Slider from "./slider/slider";
const Main = () => {
    return (
        <div className={styles.main}>
            <Product/>
            <Slider/>
        </div>
    )
}

export default Main
import Image from "next/image";
import "./navigateSlider.scss";


export function NavigateSlider() {
    return (
        <div className="app-price-nav">
            <button className="app-price-nav__button app-price-nav__button_prev">
                <Image width={20} height={20} alt="prev" src={"/icons/PriceIcons/arrow-left.svg"} />
            </button>
            <button className="app-price-nav__button app-price-nav__button_next">
                <Image width={20} height={20} alt="next" src={"/icons/PriceIcons/arrow-right.svg"} />
            </button>
        </div>
    )
}
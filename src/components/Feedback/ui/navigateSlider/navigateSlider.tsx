import Image from "next/image";
import "./navigateSlider.scss";


export function NavigateSlider() {
    return (
        <div className="app-feedback-nav">
            <button className="app-feedback-nav__button app-feedback-nav__button_prev">
                <Image width={20} height={20} alt="prev" src={"/icons/PriceIcons/arrow-left.svg"} />
            </button>
            <button className="app-feedback-nav__button app-feedback-nav__button_next">
                <Image width={20} height={20} alt="next" src={"/icons/PriceIcons/arrow-right.svg"} />
            </button>
        </div>
    )
}
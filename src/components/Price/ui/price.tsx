import "./main.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Slider } from "./slider/slider";
import { NavigateSlider } from "./navigateSlider/navigateSlider";

export function Price() {
    return (
        <section className="app-price">
            <div className="container">
                <h3 className="app-price-title">Available data plans</h3>

                <div className="app-price-wrapper">
                    <Slider />
                </div>


                <NavigateSlider />
            </div>
        </section>
    )
}
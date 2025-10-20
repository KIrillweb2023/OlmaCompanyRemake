import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "./slider.scss";
import { useEffect, useState } from "react";
import axios from "axios";

interface HeaderCard {
    type_card: string;
    stage_card: string;
}

interface PriceCard {
    id: number;
    image_type_site: string;
    header_card: HeaderCard;
    description: string;
    price_card: string;
    includes_list: string[];
}

export function Slider() {
    const [dataSlider, setDataSlider] = useState<PriceCard[]>();


    useEffect(() => {
        FetchNavigationLinks()
    }, [])

    const FetchNavigationLinks = async (): Promise<void> => {
        try {
            const { data } = await axios.get<PriceCard[]>("https://44c2efca248cf462.mokky.dev/price-cards");
            setDataSlider(data)
        } catch (err) {
            console.log(err)
        }
    }


    const RenderingCards = dataSlider ? dataSlider.map((item) => (
        <SwiperSlide key={item.id}>
            <div className="app-price-item">
                <div className="app-price-item__header">
                    <div className="app-price-item__header_icon">
                        <Image width={50} height={50} alt="check" src={item.image_type_site} />
                    </div>
                    <div className="app-price-item__header_info">
                        <h4 className="app-price-item__header_info-title">{item.header_card.type_card}</h4>
                        <p className="app-price-item__header_info-subtitle">{item.header_card.stage_card}</p>
                    </div>
                </div>

                <p className="app-price-item__description">{item.description}</p>

                <h2 className="app-price-item__count">from: {item.price_card}₽</h2>

                <h5 className="app-price-item__include">The site includes:</h5>
                <ul className="app-price-item__features">
                    {
                        item.includes_list.map((include, index) => {
                            return (
                                <li key={index} className="app-price-item__feature_li">
                                    <Image width={30} height={30} alt="check" src={"/icons/PriceIcons/Check.svg"} className="app-price-item__feature_li-icon" />
                                    <p className="app-price-item__feature_li-text">{include}</p>
                                </li>
                            )
                        })
                    }
                </ul>

                <button className="app-price-item__button">Order now</button>
            </div>
        </SwiperSlide>
    )) : null;

    return (
        <Swiper
            modules={[Navigation, Pagination]} spaceBetween={20} slidesPerView={3}
            navigation={{
                nextEl: '.app-price-nav__button_next',
                prevEl: '.app-price-nav__button_prev',
            }}
            breakpoints={{
                150: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                867: {
                    slidesPerView: 2, // На планшетах уже показываем 2 карточки
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 25
                },
                1200: {
                    slidesPerView: 3, // На десктопе 3 карточки
                    spaceBetween: 30
                }
            }}
            className="app-price-slider"
        >


            {RenderingCards}
        </Swiper>
    )
}
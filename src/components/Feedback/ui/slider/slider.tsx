import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./slider.scss";

export default function Slider() {
    return (
        <Swiper
            modules={[Navigation, Pagination]} spaceBetween={20} slidesPerView={3}
            navigation={{
                nextEl: '.app-feedback-nav__button_next',
                prevEl: '.app-feedback-nav__button_prev',
            }}
            breakpoints={{
                150: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                867: {
                    slidesPerView: 2, // На планшетах уже показываем 2 карточки
                    spaceBetween: 10
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1300: {
                    slidesPerView: 3, // На десктопе 3 карточки
                    spaceBetween: 10
                }
            }}
            className="app-feedback-slider"
        >

            <SwiperSlide>
                <div className="app-feedback-item">
                    <div className="app-feedback-item__header">
                        <div className="app-feedback-item__icon">
                            <Image width={50} height={50} alt="check" src={"/images/photo-feedbacks/one-slide.png"} />
                        </div>
                        <div className="app-feedback-item__info">
                            <div className="app-feedback-item__info_top">
                                <p className="app-feedback-item__info_top-rating">5.0</p>
                                <div className="app-feedback-item__info_top-stars">
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-disable.svg"} width={20} height={20} alt="check" />
                                </div>
                            </div>
                            <p className="app-feedback-item__info_subtitle">Ivan Petrichenko</p>
                        </div>
                    </div>

                    <h3 className="app-feedback-item__title">Compfire-School</h3>

                    <p className="app-feedback-item__descr">
                        Quasi quo sit suscipit tempora aperiam rerum placeat id. Voluptatem praesentium excepturi id. Repudiandae incidunt doloremque. Error est et ullam.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="app-feedback-item">
                    <div className="app-feedback-item__header">
                        <div className="app-feedback-item__icon">
                            <Image width={50} height={50} alt="check" src={"/images/photo-feedbacks/one-slide.png"} />
                        </div>
                        <div className="app-feedback-item__info">
                            <div className="app-feedback-item__info_top">
                                <p className="app-feedback-item__info_top-rating">5.0</p>
                                <div className="app-feedback-item__info_top-stars">
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-disable.svg"} width={20} height={20} alt="check" />
                                </div>
                            </div>
                            <p className="app-feedback-item__info_subtitle">Ivan Petrichenko</p>
                        </div>
                    </div>

                    <h3 className="app-feedback-item__title">Compfire-School</h3>

                    <p className="app-feedback-item__descr">
                        Quasi quo sit suscipit tempora aperiam rerum placeat id. Voluptatem praesentium excepturi id. Repudiandae incidunt doloremque. Error est et ullam.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="app-feedback-item">
                    <div className="app-feedback-item__header">
                        <div className="app-feedback-item__icon">
                            <Image width={50} height={50} alt="check" src={"/images/photo-feedbacks/one-slide.png"} />
                        </div>
                        <div className="app-feedback-item__info">
                            <div className="app-feedback-item__info_top">
                                <p className="app-feedback-item__info_top-rating">5.0</p>
                                <div className="app-feedback-item__info_top-stars">
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-disable.svg"} width={20} height={20} alt="check" />
                                </div>
                            </div>
                            <p className="app-feedback-item__info_subtitle">Ivan Petrichenko</p>
                        </div>
                    </div>

                    <h3 className="app-feedback-item__title">Compfire-School</h3>

                    <p className="app-feedback-item__descr">
                        Quasi quo sit suscipit tempora aperiam rerum placeat id. Voluptatem praesentium excepturi id. Repudiandae incidunt doloremque. Error est et ullam.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="app-feedback-item">
                    <div className="app-feedback-item__header">
                        <div className="app-feedback-item__icon">
                            <Image width={50} height={50} alt="check" src={"/images/photo-feedbacks/one-slide.png"} />
                        </div>
                        <div className="app-feedback-item__info">
                            <div className="app-feedback-item__info_top">
                                <p className="app-feedback-item__info_top-rating">5.0</p>
                                <div className="app-feedback-item__info_top-stars">
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-disable.svg"} width={20} height={20} alt="check" />
                                </div>
                            </div>
                            <p className="app-feedback-item__info_subtitle">Ivan Petrichenko</p>
                        </div>
                    </div>

                    <h3 className="app-feedback-item__title">Compfire-School</h3>

                    <p className="app-feedback-item__descr">
                        Quasi quo sit suscipit tempora aperiam rerum placeat id. Voluptatem praesentium excepturi id. Repudiandae incidunt doloremque. Error est et ullam.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="app-feedback-item">
                    <div className="app-feedback-item__header">
                        <div className="app-feedback-item__icon">
                            <Image width={50} height={50} alt="check" src={"/images/photo-feedbacks/one-slide.png"} />
                        </div>
                        <div className="app-feedback-item__info">
                            <div className="app-feedback-item__info_top">
                                <p className="app-feedback-item__info_top-rating">5.0</p>
                                <div className="app-feedback-item__info_top-stars">
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-active.svg"} width={20} height={20} alt="check" />
                                    <Image src={"/icons/feedbacks-icon/star-disable.svg"} width={20} height={20} alt="check" />
                                </div>
                            </div>
                            <p className="app-feedback-item__info_subtitle">Ivan Petrichenko</p>
                        </div>
                    </div>

                    <h3 className="app-feedback-item__title">Compfire-School</h3>

                    <p className="app-feedback-item__descr">
                        Quasi quo sit suscipit tempora aperiam rerum placeat id. Voluptatem praesentium excepturi id. Repudiandae incidunt doloremque. Error est et ullam.
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
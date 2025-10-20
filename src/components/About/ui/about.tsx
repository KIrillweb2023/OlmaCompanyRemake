import "./main.scss";

export function About() {
    return (
        <section className="app-about">
            <div className="container">
                <div className="app-about-wrapper">
                    <div className="app-about-info">
                        <h3 className="app-about-info__title" >About <span>us</span></h3>
                        <div className="app-about-info__text">
                            <p className="app-about-info__text_descr">
                                If you are looking to grow your business, don't miss the opportunity to contact us. We will develop a high-quality website or web application for you that will be a powerful tool for promoting your products and services online. Our team will ensure that you have a unique and functional online product that will attract the attention of your target audience and help you achieve success in the digital space.
                            </p>
                            <div className="app-about-info__text_hidden">
                                <p className="app-about-info__text_descr">
                                    If you are looking to grow your business, don't miss the opportunity to contact us. We will develop a high-quality website or web application for you that will be a powerful tool for promoting your products and services online. Our team will ensure that you have a unique and functional online product that will attract the attention of your target audience and help you achieve success in the digital space.
                                </p>
                            </div>
                        </div>
                        <button className="app-about-info__details">Details</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
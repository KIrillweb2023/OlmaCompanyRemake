import Image from "next/image";
import "./main.scss";

export function Footer() {
    return (
        <footer className="footer" role="contentinfo">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-item">
                        <h3 className="footer-item-company">Olma Web Company</h3>
                        <p className="footer-item-subtitle">
                            Modern platform for creating qualified products
                        </p>
                        <div className="footer-item-line" aria-hidden="true"></div>

                        <ul className="footer-item-list" role="list" aria-label="Social networks">
                            <li className="footer-item-li" role="listitem">
                                <div className="footer-item-content">
                                    <div className="footer-item-block">
                                        <Image height={35} width={35} src="/icons/social/tg.svg" alt="Telegram" className="footer-item-icon" />
                                    </div>
                                    <span className="footer-item-li-hidden">
                                        <a href="#" className="footer-item-li-hidden_link">Telegram</a>
                                    </span>
                                </div>
                            </li>
                            <li className="footer-item-li" role="listitem">
                                <div className="footer-item-content">
                                    <div className="footer-item-block">
                                        <Image height={35} width={35} src="/icons/social/vk.svg" alt="VKontakte" className="footer-item-icon" />
                                    </div>
                                    <span className="footer-item-li-hidden">
                                        <a href="#" className="footer-item-li-hidden_link">VKontakte</a>
                                    </span>
                                </div>
                            </li>
                            <li className="footer-item-li" role="listitem">
                                <div className="footer-item-content">
                                    <div className="footer-item-block">
                                        <Image height={35} width={35} src="/icons/social/whatsapp.svg" alt="WhatsApp" className="footer-item-icon" />
                                    </div>
                                    <span className="footer-item-li-hidden">
                                        <a href="#" className="footer-item-li-hidden_link">WhatsApp</a>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-item">
                        <h3 className="footer-item_title">Navigation</h3>
                        <nav aria-label="Additional navigation">
                            <ul className="footer-item-nav" role="list">
                                <li>
                                    <a href="#" className="footer-item-nav-link">Price List</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-item-nav-link">About Us</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-item-nav-link">Our Advantages</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-item-nav-link">Reviews</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-item-nav-link">Contact Us</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="footer-item">
                        <h3 className="footer-item_title">Details</h3>
                        <div className="footer-item_requsites">
                            <span>Account 40702810610000508370 in Tinkoff Bank</span>
                            <span>BIC 044525974</span>
                            <span>Correspondent account 30101810145250000974</span>
                            <span>OGRN 1177746566140</span>
                            <span>INN 9701078611</span>
                            <span>KPP 773101001</span>
                        </div>
                    </div>

                    <div className="footer-item">
                        <h3 className="footer-item_title">Contacts</h3>
                        <div className="footer-item-info">
                            <h4 className="footer-item_subtitle">Legal Address</h4>
                            <p className="footer-item_descr">
                                452410, Republic of Bashkortostan, Ufa, Stroitely Street, 27, building 1, 3rd floor
                            </p>
                            <h4 className="footer-item_subtitle">Contact Center</h4>
                            <p className="footer-item_descr">
                                <a href="tel:+79677310746">+7 (967) 731-07-46</a>
                            </p>
                            <h4 className="footer-item_subtitle">Email</h4>
                            <p className="footer-item_descr">
                                <a href="mailto:olmacompany@gmail.com">olmacompany@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer__subinfo">
                    <p className="footer__subinfo-text">
                        Any use of materials from this website is permitted only with written permission from the copyright holder - 781714316555 INN/OGRNIP number from 317784700113455. Use of material from the website and violation of the copyright holder's copyright and related rights is punishable in accordance with Article 146 of the Criminal Code of the Russian Federation. All information provided on the website is not a public offer under any circumstances, as defined by the provisions of Article 437 (2) of the Civil Code of the Russian Federation.
                    </p>
                </div>
            </div>
        </footer>
    )
}
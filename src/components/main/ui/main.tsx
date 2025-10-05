import Image from "next/image";
import Hamburger from "./hamburger/hamburger";
import "./main.scss";
import MainLogotype from "./MainLogotype/MainLogotype";

export function Main({ onToggle }: { onToggle: () => void }) {
    return (
        <main className="app-main">
            <MainLogotype urlLogo="/icons/logo/main-logotype.svg" widthLogo={30} heightLogo={30} textLogo="OLMA" />
            <Hamburger onToggle={onToggle} />

            <div className="app-main-bubbles">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>

            <div className="container">
                <div className="app-main-wrapper">

                    <div className="app-main-tab">
                        <div className="app-main-tab__icon app-main-tab__icon_dashboard">
                            <Image src="/icons/mainworktab.svg" width={30} height={30} alt="noname" />
                        </div>
                        <p className="app-main-tab__text">Our work schedule</p>
                        <div className="app-main-tab__icon app-main-tab__icon_arrow">
                            <Image src="/icons/mainarrowtab.svg" width={30} height={30} alt="noname" />
                        </div>
                    </div>

                    <h2 className="app-main-title">Olma a startup company focused on creating online-products</h2>
                    <p className="app-main-descr">We create high-quality web products for your business and focus on high-quality web products, focusing on speed, security, and ease of management for you</p>
                    <div className="app-main-buttons">
                        <button className="app-main-buttons-btn app-main-buttons-btn__submit">
                            <p>Submit your application</p>
                            <Image src="/icons/mainarrowbtn.svg" width={30} height={30} alt="noname" />
                        </button>
                        <button className="app-main-buttons-btn app-main-buttons-btn__consult">To consult</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
import Image from "next/image";

import "./main.scss";
import Cards from "./cards/cards";

export function Why() {
    return (
        <div className="app-why">
            <div className="container">

                <h2 className="app-why-title">Why are you choosing us?</h2>
                <p className="app-why-subtitle">We focus on the quality of creating online products using the latest technologies and provide the best benefits for you</p>


                <Cards />

            </div>
        </div>
    )
}
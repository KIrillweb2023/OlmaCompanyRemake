import "./main.scss";
import { NavigateSlider } from "./navigateSlider/navigateSlider";
import Slider from "./slider/slider";


export function Feedback() {
    return (
        <div className="app-feedback">
            <div className="container">
                <h2 className="app-feedback-title">Real feedback from our customers</h2>
                <p className="app-feedback-descr">Discover how leading businesses optimize performance, automate workflows, and achieve transformative growth with NexaAI.</p>


                <div className="app-feedback-wrapper">
                    <Slider />
                </div>


                <NavigateSlider />

            </div>
        </div>
    )
}
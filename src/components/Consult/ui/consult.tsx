import Image from "next/image";
import "./main.scss";

export function Consult() {
    return (
        <div className="app-consult">
            <div className="container">
                <div className="app-consult-wrapper">
                    <h3 className="app-consult-title">
                        <span>The first step to an outstanding</span>
                        <br />
                        <span className="image-line">
                            product is a
                            <Image
                                width={155}
                                height={45}
                                alt=""
                                role="presentation"
                                src={'/icons/consultIcons/text-block.svg'}
                                className="text-image"
                            />
                            conversation.
                        </span>
                        <br />
                        <span>Let's get started.</span>
                    </h3>
                    <p className="app-consult-descr">Thanks to our consultation, we will be able to understand what is important to you in your product and will be able to implement everything down to the smallest detail.</p>
                    <button className="app-consult-btn">
                        <p className="app-consult-btn__text">To consult</p>
                        <Image width={35} height={35} alt="text-icon" src={'/icons/consultIcons/playIcon.svg'} />
                    </button>
                </div>
            </div>
        </div>
    )
}
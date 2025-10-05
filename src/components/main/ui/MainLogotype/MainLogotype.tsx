import Image from "next/image"
import "./MainLogotype.scss";


export default function MainLogotype(
    {
        urlLogo,
        widthLogo,
        heightLogo,
        textLogo
    }:
        {
            urlLogo: string,
            widthLogo: number,
            heightLogo: number,
            textLogo: string
        }) {

    return (
        <div className="app-logo">
            <Image className="app-logo-icon" width={widthLogo} height={heightLogo} alt="Основной Логотип olma" src={urlLogo} />
            <h4 className="app-logo-text">{textLogo}</h4>
        </div>
    )
}
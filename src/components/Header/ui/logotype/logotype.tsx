import Image from "next/image";

export default function Logotype(
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
        <div className="app-header-logo">
            <Image className="app-header-logo__icon" width={widthLogo} height={heightLogo} alt="Логотип olma" src={urlLogo} />
            <h4 className="app-header-logo__text">{textLogo}</h4>
        </div>
    )
}
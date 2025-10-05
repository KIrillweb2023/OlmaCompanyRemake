import Image from "next/image";
import "./hamburger.scss";

export default function Hamburger({ onToggle }: { onToggle: () => void }) {
    return (
        <div className="app-hamburger" onClick={onToggle}>
            <Image className="app-hamburger-icon" src="/icons/menu/hamburger.png" alt="Open menu" width={30} height={30} />
        </div>
    )
}
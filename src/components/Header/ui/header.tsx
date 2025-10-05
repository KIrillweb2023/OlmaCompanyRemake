import Image from "next/image";
import "./main.scss";

import Navigation from "./navigation/navigation";
import Logotype from "./logotype/logotype";
import Button from "./button/button";
import Close from "./close/close";

export function Header({ onToogle, isMenu }: { onToogle: () => void, isMenu: boolean }) {
    return (
        <>
            <header className={`app-header ${isMenu ? "active-menu" : ""}`}>
                <div className="app-header-wrapper">

                    <Logotype urlLogo="/icons/logo/logotype.svg" widthLogo={30} heightLogo={30} textLogo="The top to the goal" />
                    <Navigation />
                    <Button />

                    <Close onToogle={onToogle} />

                </div>
            </header>
        </>
    )
}
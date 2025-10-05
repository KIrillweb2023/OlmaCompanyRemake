import Image from "next/image";

export default function Close({ onToogle }: { onToogle: () => void }) {
    return (
        <div className="app-header-close" onClick={onToogle}>
            <Image className="app-header-close__icon" src="/icons/menu/close.svg" alt="Close menu" width={35} height={35} />
        </div>
    )
}
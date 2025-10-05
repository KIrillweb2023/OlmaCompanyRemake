import Image from "next/image";

export default function Button() {
    return (
        <button className="app-header-auth">
            <Image className="app-header-auth__icon" src={"/icons/authBtnHeader.svg"} width={25} height={25} alt="Войти" />
            <p className="app-header-auth__text">Login</p>
        </button>
    )
}
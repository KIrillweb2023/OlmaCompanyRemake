"use client"

import { useEffect, useState } from "react";
import "./cards.scss";
import Image from "next/image";
import axios from "axios";

interface ICard {
    id: number;
    icon_card: string;
    title_card: string;
    descr_card: string;
}

export default function Cards() {
    const [adventList, setAdventList] = useState<ICard[]>();

    useEffect(() => {
        FetchCards()
    }, [])


    const FetchCards = async () => {
        try {
            const { data } = await axios.get('https://44c2efca248cf462.mokky.dev/why-section-cards');
            setAdventList(data);
        } catch (error) {
            console.error('Ошибка получения карт!');
        }
    }


    const contentRender = adventList
        ? adventList.map((item) => (
            <li key={item.id} className="app-why-list__item">
                <Image src={item.icon_card} width={40} height={40} alt="Icon card" className="app-why-list__item_icon" />
                <h4 className="app-why-list__item_title">{item.title_card}</h4>
                <p className="app-why-list__item_descr">{item.descr_card}</p>
            </li>
        ))
        : "Ошибка, нет карточек..."


    return (
        <ul className="app-why-list">
            {contentRender}
        </ul>
    )
}
"use client"

import { NavLinks } from "@/types/NavLink.types";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Navigation() {
    const [links, setLinks] = useState<NavLinks[] | null>([]);

    useEffect(() => {
        FetchNavigationLinks()
    }, [])

    const FetchNavigationLinks = async () => {
        try {
            const { data } = await axios.get("https://44c2efca248cf462.mokky.dev/navigation-panel");
            setLinks(data)
        } catch (err) {
            console.log(err)
        }
    }


    const navigationsContent = links ? links.map((link) => (
        <li className="app-header-list__item" key={link.id}>
            <Link className="app-header-list__item_link" href={link.href_tab}>
                {link.text_tab}
            </Link>
        </li>

    )) : null

    return (
        <>
            <nav className="app-header-nav ">
                <h3 className="app-header-nav__title">Navigation Links</h3>
                <ul className="app-header-list">
                    {navigationsContent}
                </ul>
            </nav>
        </>
    )
}
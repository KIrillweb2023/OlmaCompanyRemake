"use client"

import { Header } from "@/components/Header";
import { Main } from "@/components/main";
import { useState } from "react";

export default function Home() {
  const [isMenu, setIsMenu] = useState(false);

  const onToogleMenu = () => setIsMenu(!isMenu);

  return (
    <>
      <Header onToogle={onToogleMenu} isMenu={isMenu} />
      <Main onToggle={onToogleMenu} />
    </>
  );
}

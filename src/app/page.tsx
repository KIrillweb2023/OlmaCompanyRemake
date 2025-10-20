"use client"

import { About } from "@/components/About";
import { Consult } from "@/components/Consult";
import { Feedback } from "@/components/Feedback";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/main";
import { Price } from "@/components/Price";
import { Questions } from "@/components/Questions";
import { Why } from "@/components/Why";
import { useState } from "react";

export default function Home() {
  const [isMenu, setIsMenu] = useState(false);

  const onToogleMenu = () => setIsMenu(!isMenu);

  return (
    <>
      <Header onToogle={onToogleMenu} isMenu={isMenu} />
      <Main onToggle={onToogleMenu} />
      <Why />
      <Consult />
      <Price />
      <About />
      <Feedback />
      <Questions />
      <Footer />
    </>
  );
}

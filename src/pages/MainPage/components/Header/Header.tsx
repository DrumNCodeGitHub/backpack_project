import React from "react";
import "./Header.scss";
import { NavBar } from "./NavBar/NavBar";
import { MainSection } from "./MainSection/MainSection";

type Props = {
  activePage: string;
};

export const Header: React.FC<Props> = ({ activePage }) => {
  return (
    <header className="Header">
      <NavBar activePage={activePage} />
      <MainSection />
    </header>
  );
};

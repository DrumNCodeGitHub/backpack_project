import React from "react";
import "./Header.scss";
import { MainSection } from "./MainSection/MainSection";

type Props = {
  activePage: string;
};

export const Header: React.FC<Props> = ({ activePage }) => {
  return (
    <header className="Header">
      <MainSection />
    </header>
  );
};

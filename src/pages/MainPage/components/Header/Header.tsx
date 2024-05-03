import React from "react";
import "./Header.scss";
import { MainSection } from "./MainSection/MainSection";

export const Header: React.FC = () => {
  return (
    <header className="Header">
      <MainSection />
    </header>
  );
};

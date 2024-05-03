import React from "react";
import "./Footer.scss";
import footerBackground from "../../../../images/footer_background.jpg";
import { FooterForm } from "./components/FooterForm/FooterForm";
import { FooterInfo } from "./components/FooterInfo/FooterInfo";

export const Footer: React.FC = () => {
  return (
    <footer
      className="Footer"
      style={{ backgroundImage: `url(${footerBackground})` }}
    >
      <FooterForm />
      <FooterInfo />
    </footer>
  );
};

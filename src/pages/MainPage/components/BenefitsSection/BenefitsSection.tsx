import React from "react";
import "./BenefitsSection.scss";
import benefitsBackgroundImage from "../../../../images/benefits_background.jpg";
import { BenefitsList } from "./components/BenefitsList/BenefitsList";

export const BenefitsSection: React.FC = () => {
  return (
    <section
      className="BenefitsSection"
      style={{ backgroundImage: `url(${benefitsBackgroundImage})` }}
    >
      <h2 className="benefits-title">
        Designed for <span>Tomorrow</span> in Mind
      </h2>
      <BenefitsList />
    </section>
  );
};

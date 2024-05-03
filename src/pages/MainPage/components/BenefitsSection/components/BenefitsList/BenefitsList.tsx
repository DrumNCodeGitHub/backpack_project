import React from "react";
import "./BenefitsList.scss";
import sustainIcon from "../../../../../../images/svg/sustainable_build_icon.svg";
import waterIcon from "../../../../../../images/svg/water_resistant_icon.svg";
import storageIcon from "../../../../../../images/svg/smart_storage_icon.svg";
import colorIcon from "../../../../../../images/svg/color_variety_icon.svg";
import { BenefitItem } from "./BenefitItem/BenefitItem";
import { MobileBenefitItem } from "./MobileBenefitItem/MobileBenefitItem";

export const BenefitsList: React.FC = () => {
  return (
    <div className="BenefitsList">
      <h2 className="benefits-title">
        Designed for<span>Tomorrow</span>in Mind
      </h2>
      <div className="mobile-benefits-list">
        <MobileBenefitItem
          iconSrc={sustainIcon}
          name="Sustainable Build"
          text="Responsibly sourced and made from the highest-quality sustainable materials, our backpacks set a new standard for eco-friendly travel gear."
        />
        <MobileBenefitItem
          iconSrc={waterIcon}
          name="Water-Resistant"
          text="Responsibly sourced and made from the highest-quality sustainable materials, our backpacks set a new standard for eco-friendly travel gear."
        />
        <MobileBenefitItem
          iconSrc={storageIcon}
          name="Smart Storage"
          text="Responsibly sourced and made from the highest-quality sustainable materials, our backpacks set a new standard for eco-friendly travel gear."
        />
        <MobileBenefitItem
          iconSrc={colorIcon}
          name="Color Variety"
          text="Responsibly sourced and made from the highest-quality sustainable materials, our backpacks set a new standard for eco-friendly travel gear."
        />
      </div>
      <div className="benefits-list">
        <div className="benefits-group">
          <BenefitItem
            iconSrc={sustainIcon}
            name="Sustainable Build"
            text="Responsibly sourced and made from the highest-quality sustainable materials, our backpacks set a new standard for eco-friendly travel gear."
            shouldHaveLine={true}
          />
          <BenefitItem
            iconSrc={waterIcon}
            name="Water-Resistant"
            text="Responsibly sourced and made from the highest-quality sustainable materials, our backpacks set a new standard for eco-friendly travel gear."
            shouldHaveLine={false}
          />
        </div>
        <div className="benefits-group">
          <BenefitItem
            iconSrc={storageIcon}
            name="Smart Storage"
            text="Responsibly sourced and made from the highest-quality sustainable materials, our backpacks set a new standard for eco-friendly travel gear."
            shouldHaveLine={true}
          />
          <BenefitItem
            iconSrc={colorIcon}
            name="Color Variety"
            text="Responsibly sourced and made from the highest-quality sustainable materials, our backpacks set a new standard for eco-friendly travel gear."
            shouldHaveLine={false}
          />
        </div>
      </div>
    </div>
  );
};

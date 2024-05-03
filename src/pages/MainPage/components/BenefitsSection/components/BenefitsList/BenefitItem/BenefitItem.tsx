import React from "react";
import "./BenefitItem.scss";
import dottedLine from "../../../../../../../images/svg/dotted_line.svg";

type Props = {
  iconSrc: string;
  name: string;
  text: string;
  shouldHaveLine: boolean;
};

export const BenefitItem: React.FC<Props> = ({
  iconSrc,
  name,
  text,
  shouldHaveLine,
}) => {
  return (
    <div className="BenefitItem">
      <div className="group">
        <div className="icon-holder">
          <img src={iconSrc} alt="icon" />
        </div>
        {shouldHaveLine && (
          <img className="dotted-line" src={dottedLine} alt="line" />
        )}
      </div>

      <div className="text-content">
        <h4 className="benefit-name">{name}</h4>
        <p className="benefit-text">{text}</p>
      </div>
    </div>
  );
};

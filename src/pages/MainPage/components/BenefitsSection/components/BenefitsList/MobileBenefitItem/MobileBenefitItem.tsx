import React from "react";
import "./MobileBenefitItem.scss";
import dottedLine from "../../../../../../../images/svg/dotted_line.svg";
import openArrow from "../../../../../../../images/svg/arrow_open.svg";
import closeArrow from "../../../../../../../images/svg/close_button.svg";

type Props = {
  iconSrc: string;
  name: string;
  text: string;
};

export const MobileBenefitItem: React.FC<Props> = ({ iconSrc, name, text }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={"MobileBenefitItem " + (isOpen ? "open" : "")}>
      <div className="group">
        <div className="icon-holder">
          <img src={iconSrc} alt="icon" />
        </div>
        <img className="dotted-line" src={dottedLine} alt="line" />
      </div>

      <div className="text-content">
        <div className="block">
          <h4 className="benefit-name">{name}</h4>
          <div className="arrow" onClick={() => setIsOpen(!isOpen)}>
            <img src={isOpen ? closeArrow : openArrow} alt="open" />
          </div>
        </div>

        <p className="benefit-text">{text}</p>
      </div>
    </div>
  );
};

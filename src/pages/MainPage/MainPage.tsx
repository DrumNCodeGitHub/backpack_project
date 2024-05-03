import React, { useState } from "react";
import "./MainPage.scss";
import { Header } from "./components/Header/Header";
import { JourneySection } from "./components/JourneySection/JourneySection";
import { BenefitsSection } from "./components/BenefitsSection/BenefitsSection";
import { OrderSection } from "./components/OrderSection/OrderSection";
import { StoriesSection } from "./components/StoriesSection/StoriesSection";
import { Footer } from "./components/Footer/Footer";

type Props = {
  activePage: string;
};

export const MainPage: React.FC<Props> = ({ activePage }) => {
  const [activeColor, setActiveColor] = useState("#FFDE30");
  return (
    <div className="MainPage">
      <div className="ellipse"></div>
      <div className="circle"></div>
      <Header activePage={activePage} />
      <JourneySection />
      <BenefitsSection />
      <OrderSection activeColor={activeColor} onColorChange={setActiveColor} />
      <StoriesSection />
      <Footer />
    </div>
  );
};

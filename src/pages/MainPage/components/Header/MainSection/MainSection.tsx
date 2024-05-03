import React from "react";
import "./MainSection.scss";
import main from "../../../../../images/main_page_image.png";
import line from "../../../../../images/svg/line.svg";
import backpack from "../../../../../images/main_backpack.png";
import { TravelersCard } from "./TravelersCard/TravelersCard";

export const MainSection: React.FC = () => {
  return (
    <main className="MainSection" id="home">
      <div className="title-area">
        <div className="message">Eco-Friendly</div>
        <h1 className="title">Explore</h1>
        <h1 className="title">Consciously</h1>
        <p className="title-text">
          Discover the ultimate travel companion for the eco-aware adventurer.
          Crafted for sustainability, designed for functionality.
        </p>
        <button className="buy-button">Buy a Backpack</button>
        <div className="image-div">
          <img className="main-image" src={main} alt="Traveler" />
        </div>
        <div className="mobile-card">
          <TravelersCard />
        </div>
      </div>
      <div className="image-area">
        <img className="backpack" src={backpack} alt="Backpack" />
        <div className="filled-circle"></div>
        <div className="empty-circle"></div>
        <div className="laptop-card">
          <TravelersCard />
        </div>
        <div className="line">
          <img src={line} alt="Traveler" />
        </div>
      </div>
    </main>
  );
};

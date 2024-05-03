import React from "react";
import "./MainSection.scss";
import main from "../../../../../images/main_page_image.png";
import line from "../../../../../images/svg/line.svg";
import backpack from "../../../../../images/main_backpack.png";
import photo1 from "../../../../../images/traveler_photo_1.png";
import photo2 from "../../../../../images/traveler_photo_2.png";
import photo3 from "../../../../../images/traveler_photo_3.png";
import photo4 from "../../../../../images/traveler_photo_4.png";
import photo5 from "../../../../../images/traveler_photo_5.png";
import photo6 from "../../../../../images/traveler_photo_6.png";

export const MainSection: React.FC = () => {
  const happyTravelersImages: string[] = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
  ];
  return (
    <main className="MainSection">
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
      </div>
      <div className="image-area">
        <img className="backpack" src={backpack} alt="Backpack" />
        <div className="filled-circle"></div>
        <div className="empty-circle"></div>
        <div className="travelers-card">
          {happyTravelersImages.map((image) => (
            <img
              className="happy-traveler-image"
              key={image}
              src={image}
              alt="happy traveler"
            />
          ))}
          <div className="travelers-text">
            <h2 className="travelers-amount">100+</h2>
            <p>Happy Travelers</p>
          </div>
        </div>
        <div className="line">
          <img src={line} alt="Traveler" />
        </div>
      </div>
    </main>
  );
};

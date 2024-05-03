import React from "react";
import "./TravelersCard.scss";
import photo1 from "../../../../../../images/traveler_photo_1.png";
import photo2 from "../../../../../../images/traveler_photo_2.png";
import photo3 from "../../../../../../images/traveler_photo_3.png";
import photo4 from "../../../../../../images/traveler_photo_4.png";
import photo5 from "../../../../../../images/traveler_photo_5.png";
import photo6 from "../../../../../../images/traveler_photo_6.png";

export const TravelersCard: React.FC = () => {
  const happyTravelersImages: string[] = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
  ];
  return (
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
  );
};

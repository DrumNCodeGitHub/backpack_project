import React from "react";
import "./JourneySection.scss";
import journey1 from "../../../../images/journey_1.png";
import journey2 from "../../../../images/journey_2.png";

export const JourneySection: React.FC = () => {
  return (
    <section className="JourneySection" id="journey">
      <div className="grey-square"></div>
      <div className="journey-content">
        <div className="image-content">
          <div className="images">
            <div className="image-1">
              <img src={journey1} alt="modern backpack" />
            </div>
            <div className="image-2">
              <img src={journey2} alt="traveling with backpack" />
            </div>
          </div>
          <div className="green-circle"></div>
        </div>
        <div className="text-content">
          <div className="journey-message">
            <span className="year-number">5+</span>Years of Commitment
          </div>
          <h3 className="journey-title">Our Journey</h3>
          <p className="journey-text">
            Backpack was born from the desire to provide environmentally
            conscious travelers with a sustainable option to explore the world.
            We believe in creating products that are durable, stylish, and kind
            to the planet. Our backpacks are designed with the modern nomad in
            mind, integrating innovative storage solutions and water-resistant
            materials to withstand the rigors of travel.
          </p>
        </div>
      </div>
    </section>
  );
};

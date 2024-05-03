import React from "react";
import "./StoriesSection.scss";
import circles from "../../../../images/circles.png";
import reviewPhoto1 from "../../../../images/review_photo_1.png";
import reviewPhoto2 from "../../../../images/review_photo_2.png";
import reviewPhoto3 from "../../../../images/review_photo_3.png";

export const StoriesSection: React.FC = () => {
  return (
    <section className="StoriesSection" id="reviews">
      <div className="story">
        <h2 className="story-title">Real Stories</h2>
        <p className="story-text">
          "Backpack has truly changed the way I travel. Their attention to
          detail and sustainable design makes me feel good about the gear I
          carry."
        </p>
        <div className="underline"></div>
        <p className="story-author">Jane Doe. - Eco-Traveler</p>
      </div>
      <div className="images">
        <div className="review">
          <h4 className="review-number">100+</h4>
          <p className="review-star">5-Star Reviews</p>
        </div>

        <figure className="circle-image circle-image-1">
          <img src={reviewPhoto1} alt="review author" />
        </figure>
        <figure className="circle-image circle-image-2">
          <img src={reviewPhoto2} alt="review author" />
        </figure>
        <figure className="circle-image circle-image-3">
          <img src={reviewPhoto3} alt="review author" />
        </figure>
      </div>
      <div className="background-image">
        <img src={circles} alt="circles" />
      </div>
    </section>
  );
};

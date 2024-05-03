import React, { useState } from "react";
import "./OrderSection.scss";
import yellowBackpack from "../../../../images/yellow_backpack.png";
import manWithBackpack from "../../../../images/man_with_backpack.png";
import openedBackpack from "../../../../images/opened_backpack.png";
import openedBackpack2 from "../../../../images/opened_backpack_2.png";
import star from "../../../../images/svg/star_icon.svg";
import halfStar from "../../../../images/svg/half_star_icon.svg";

type Props = {
  activeColor: string;
  onColorChange: (color: string) => void;
};

export const OrderSection: React.FC<Props> = ({
  activeColor,
  onColorChange,
}) => {
  const colors = ["#FFDE30", "#FFA030", "#FF3C30", "#C930FF", "#07C703"];
  const [amount, setAmount] = useState(1);

  const renderStars = (numStars: number) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(<img className="star" key={i} src={star} alt="Star" />);
    }
    if (numStars % 1 !== 0) {
      stars.push(
        <img className="star" key="halfStar" src={halfStar} alt="Half Star" />,
      );
    }
    return stars;
  };

  const numStars = 4.5;

  return (
    <section className="OrderSection">
      <h2 className="order-title">Choose and order right now</h2>
      <div className="photo-section">
        <figure className="big-image">
          <img src={yellowBackpack} alt="Yellow backpack" />
        </figure>
        <figure className="small-image-1">
          <img src={manWithBackpack} alt="Man With Backpack" />
        </figure>
        <figure className="small-image-2">
          <img src={openedBackpack} alt="Opened backpack" />
        </figure>
        <figure className="bottom-image">
          <img src={openedBackpack2} alt="Opened backpack" />
        </figure>
      </div>
      <div className="product-description">
        <div className="product-text">
          <h3 className="product-title">Backpack TRVLbag yellow</h3>
          <div className="stars">
            {renderStars(numStars)}
            <span className="review-rate">(4/8 from 328 Reviews)</span>
          </div>
          <h5 className="color-select-text">Select color</h5>
          <div className="colors">
            {colors.map((color) => (
              <div
                onClick={() => onColorChange(color)}
                key={color}
                className="color"
                style={{ backgroundColor: color }}
              >
                {activeColor === color && <div className="active"></div>}
              </div>
            ))}
          </div>
        </div>
        <div className="product-price">
          <div className="total">
            <p className="grey-text">Total Price</p>
            <div className="prices">
              <p className="total-price">$120</p>
              <p className="old-total-price">$120</p>
            </div>
          </div>

          <div className="quantity">
            <p className="grey-text">Quantity</p>
            <div className="product-quantity">
              <button
                onClick={() => setAmount(amount - 1)}
                disabled={amount === 1}
                className="button minus-button"
              >
                -
              </button>
              <div className="number">{amount}</div>
              <button
                onClick={() => setAmount(amount + 1)}
                className="button plus_button"
              >
                +
              </button>
            </div>
          </div>

          <button className="buy-product-button">Buy it Now</button>
        </div>
      </div>
    </section>
  );
};

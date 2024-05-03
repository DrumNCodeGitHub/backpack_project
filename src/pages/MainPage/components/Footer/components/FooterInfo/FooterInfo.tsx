import React from "react";
import "./FooterInfo.scss";

export const FooterInfo: React.FC = () => {
  return (
    <div className="FooterInfo">
      <div className="backpack-info">
        <h5 className="backpack-info-title">Backpack</h5>
        <p className="backpack-info-text">
          Embark on your next adventure with Backpack, where every journey
          contributes to a greener planet.
        </p>
      </div>
      <div className="navigation-info">
        <h5 className="navigation-info-title">Navigation</h5>
        <ul className="navigation-info-list">
          <li className="navigation-info-item">
            <a href="#home">Home</a>
          </li>
          <li className="navigation-info-item">
            <a href="#about">About Us</a>
          </li>
          <li className="navigation-info-item">
            <a href="#faq">FAQ</a>
          </li>
          <li className="navigation-info-item">
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
      <div className="service-info">
        <h5 className="service-info-title">Customer Service</h5>
        <ul className="service-info-list">
          <li className="service-info-item">
            <a href="#help">Help & Support</a>
          </li>
          <li className="service-info-item">
            <a href="#policy">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="social-info">
        <h5 className="social-info-title">Social Media</h5>
        <ul className="social-info-list">
          <li className="social-info-item">
            <a href="#instagram">Instagram</a>
          </li>
          <li className="social-info-item">
            <a href="#tiktok">TikTok</a>
          </li>
          <li className="social-info-item">
            <a href="#facebook">Facebook</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

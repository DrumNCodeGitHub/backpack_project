import React, { useState } from "react";
import "./FooterForm.scss";

export const FooterForm: React.FC = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  return (
    <div className="FooterForm">
      <div className="form">
        <h2 className="form-title">Subscribe to personalized offers</h2>
        <p className="form-text">
          Leave your email address to receive promotional offers, news, and much
          more.
        </p>
      </div>
      <form className="email-form">
        <input
          placeholder="Enter email"
          type="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

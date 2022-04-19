import React from "react";
import "../Styles/context.css";

import {
  BsFillArrowUpLeftCircleFill,
  BsFillLightningChargeFill,
  BsFillAlarmFill,
  BsHandThumbsUp,
  BsFillPeopleFill,
  BsFillKeyFill,
  BsFillChatTextFill,
} from "react-icons/bs";

export const Context = (props) => {
  return (
    <div className="context-main-container">
      <div className="card-continer">
        <div className="card-1">
          <div className="visa-card">
            <h6>Cardzz</h6>
            <h3>visa</h3>
          </div>
          <h3 className="number">9491487235</h3>
        </div>
        <div className="card-2">
          <h4 className="number">Balance</h4>
          <h3 className="number">$12.2k</h3>
        </div>
      </div>
      <div className="account-main">
        <h2>Account Summary</h2>
        <div className="account-cont">
          <div className="account-card">
            <BsFillLightningChargeFill className="account-icon-1" />
            <p className="account-text-el">This Week</p>
            <p>+6.4%</p>
          </div>
          <div className="account-card">
            <BsFillArrowUpLeftCircleFill className="account-icon-2" />
            <p className="account-text-el">This Month</p>
            <p>-3.1%</p>
          </div>
          <div className="account-card">
            <BsFillAlarmFill className="account-icon-3" />
            <p className="account-text-el">Upcoming</p>
            <p>+10.3%</p>
          </div>
        </div>
      </div>

      <div className="Account-summary-cont">
        <h2>Account Summary</h2>

        <div className="Account-card-cont">
          <div className="Account-card">
            <div className="Like-container">
              <BsHandThumbsUp className="summary-icon" />
              <p>Like</p>
            </div>
            <p>16</p>
          </div>

          <div className="Account-card">
            <div className="Like-container">
              <BsFillChatTextFill className="summary-icon" />
              <p>Attachment</p>
            </div>
            <p>32</p>
          </div>
        </div>

        <div className="Account-card-cont">
          <div className="Account-card">
            <div className="Like-container">
              <BsFillPeopleFill className="summary-icon" />
              <p>Team Members</p>
            </div>
            <p>24</p>
          </div>

          <div className="Account-card">
            <div className="Like-container">
              <BsFillKeyFill className="summary-icon" />
              <p>Access Creds</p>
            </div>
            <p>40</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Context;

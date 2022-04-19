import React from "react";
import "../Styles/Navbar.css";
import { AiFillMessage, AiFillBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <div className="Navbar_Container">
      <div className="nav-profileCont">
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/12-peoples-avatars/user-profile.png"
          alt="profileIcon"
          className="img-size"
        />
        <h3>Welcome To Your Dashboard</h3>
      </div>
      <div className="Nav-icons">
        <AiFillMessage style={{ color: "#FFA500", fontSize: "45px" }} />
        <AiFillBell style={{ fontSize: "40px" }} />
        <CgProfile style={{ fontSize: "40px" }} />
      </div>
    </div>
  );
}

export default Navbar;

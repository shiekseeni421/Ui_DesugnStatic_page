import React from "react";
import {
  BsFillTriangleFill,
  BsSpeedometer,
  BsFillHandbagFill,
} from "react-icons/bs";
import { AiFillFire, AiFillSetting, AiOutlinePoweroff } from "react-icons/ai";
import { CgMenuGridO, CgProfile } from "react-icons/cg";
import "../Styles/sideBar.css";

export const Sidebar = (props) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-firstEl">
        <BsFillTriangleFill />
      </div>

      <div className="sidebar-middleicon">
      <div>
        <BsSpeedometer className="eachicon" />
      </div>
        <CgMenuGridO className="eachicon" />
        <BsFillHandbagFill className="eachicon" />
        <CgProfile  className="eachicon"/>
        <AiFillFire  className="eachicon"/>
        <AiFillSetting className="eachicon" />
      </div>

      <div className="side-power-icon">
        <AiOutlinePoweroff />
      </div>
    </div>
  );
};

export default Sidebar;

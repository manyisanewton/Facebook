import React from "react";
import "./TopBar.css";

// Importing the user avatar image
import MyProfileImage from "../assets/myprofile.png";

function TopBar() {
  return (
    <div className="topBarContainer">
      <div className="topbarLeft">
        <span className="logo">Newton_Manyisa</span>
      </div>
      <div className="topbarCenter">
        <span className="logo" style={{color:"white",fontSize:"20px"}}>You are in Newton's page curently</span>
      </div>
      <div className="topbarRight">
        {/* User Avatar */}
        <img
          src={MyProfileImage}
          alt="User Avatar"
          className="topbarImg"
        />
      </div>
    </div>
  );
}

export default TopBar;

import React from "react";
import { Link } from "react-router-dom";
const FrontPage = () => {
  return (
    <div className="front-page">
      <div className="nav">
        <h1>FAST EDIT</h1>
        <Link className="start-coding-button" to="/CodingPage">
          START CODING
        </Link>
      </div>
      <div className="main">
        <h2 className="subheader">
          CODE ANYWHERE ANYTIME <br />
          BUILD YOUR DREAM PROJECT NOW <br />
          WITH ANY LANGUAGE YOU DESIRE <br /> CODE ON ANY DEVICE
        </h2>
        <div className="img-div">
          <img src={require("../img/devices.png")} alt="pc and phone" />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;

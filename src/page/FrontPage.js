import React from "react";
import { Link } from "react-router-dom";
const FrontPage = () => {
  return (
    <div className="front-page">
      <div className="nav">
        <h1>FAST EDIT</h1>
        <Link className="export-button" to="/CodingPage">
          START CODING
        </Link>
      </div>
      <div className="main">
        <h2 className="subheader">CODE ANYWHERE ANYTIME</h2>
        <h2 className="subheader">BUILD YOUR DREAM PROJECT NOW</h2>
        <h2 className="subheader">WITH ANY LANGUAGE YOU DESIRE</h2>
        <h2 className="subheader">CODE ON ANY DEVICE</h2>
        <div className="img-div">
          <img src={require("../img/devices.png")} alt="pc and phone" />
        </div>
      </div>
      <div className='bubbles'>
  <span style={{i:"11"}}  ><h3>js</h3></span>
  <span style={{i:"16"}} ><h3>c</h3></span>
  <span style={{i:"21"}} ><h3>html</h3></span>
  <span style={{i:"23"}} ><h3>php</h3></span>
  <span style={{i:"13"}} ><h3>css</h3></span>
  <span style={{i:"11"}} ><h3>java</h3></span>
  <span style={{i:"18"}} ><h3>c#</h3></span>
  <span style={{i:"15"}} ><h3>python</h3></span>
  <span style={{i:"22"}} ><h3>ruby</h3></span>
  <span style={{i:"25"}} ><h3>c++</h3></span>
  <span style={{i:"11"}} ><h3>swift</h3></span>
  <span style={{i:"10"}} ><h3>go</h3></span>
</div>
    </div>
  );
};

export default FrontPage;

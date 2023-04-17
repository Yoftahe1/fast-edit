import React from "react";
import { Link } from "react-router-dom";
import styles from './frontpage.module.css'
const FrontPage = () => {
  return (
    <div className={styles.frontPage}>
      <div className={styles.nav}>
        <h1>FAST EDIT</h1>
        <Link className={styles.button} to="/CodingPage">
          START CODING
        </Link>
      </div>
      <div className={styles.main}>
        <h2 className={styles.subheader}>
          CODE ANYWHERE ANYTIME <br />
          BUILD YOUR DREAM PROJECT NOW <br />
          WITH ANY LANGUAGE YOU DESIRE <br /> CODE ON ANY DEVICE
        </h2>
        <div className={styles.container}>
          <img src={require("../img/devices.png")} alt="pc and phone" />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;

import React from "react";
import { Link } from "react-router-dom";
import error from "../img/error.gif";
import styles from "./frontpage.module.css";
const Error = () => {
  return (
    <div className={styles.frontPage}>
      <div className={styles.nav}>
        <h1>FAST EDIT</h1>
        <Link className={styles.button} to="/CodingPage">
          START CODING
        </Link>
      </div>
      <div className={styles.container}>
        <img src={error} alt="pc and phone" />
        <h2 className={styles.subheader}>Page Not Found</h2>
        <Link className={styles.button} to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Error;

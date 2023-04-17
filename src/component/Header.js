import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import storeContext from "../store/Store";
import styles from "./header.module.css";
const Header = (props) => {
  const navigate = useNavigate();
  const storeCtx = useContext(storeContext);
  return (
    <>
      <div className={styles.header}>
        <h1 onClick={() => navigate("/")}>FAST EDIT</h1>
        <button className={styles.button} onClick={storeCtx.isExportingHandler}>
          EXPORT
        </button>
      </div>
    </>
  );
};

export default Header;

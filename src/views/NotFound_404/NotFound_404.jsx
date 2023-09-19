import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound_404.module.css";

export default function NotFound_404() {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/home");
  };
  return (
    <div className={styles.container}>
      <div className={styles.buttonBack}>
        <button onClick={backToHome}>X</button>
      </div>
      <div>
        <h1>Oops! You seem to be lost.</h1>
      </div>
    </div>
  );
}

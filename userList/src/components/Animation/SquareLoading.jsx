import React from "react";
import styles from "./SquareLoading.module.css";
function SquareLoading() {
  return (
    <div className={styles.squareLoading}>
      <div className={styles.squares}>
        <div className={styles.square1Anime}></div>
        <div className={styles.square2Anime}></div>
      </div>

      <h4>Loading...</h4>
    </div>
  );
}

export default SquareLoading;

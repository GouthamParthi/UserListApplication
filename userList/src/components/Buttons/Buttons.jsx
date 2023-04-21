import React from "react";
import styles from "./Buttons.module.css";
function Buttons({ buttonName, buttonColor, onButtonClicked, type }) {
  return (
    <button
      className={[styles.buttons, styles[buttonColor]].join(" ")}
      onClick={onButtonClicked}
      type={type ? type : "button"}
      value={buttonName.toLowerCase()}
    >
      {buttonName}
    </button>
  );
}

export default Buttons;

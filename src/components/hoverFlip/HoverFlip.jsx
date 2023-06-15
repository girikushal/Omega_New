import React from "react";
import styles from "@/styles/Home.module.css";

const HoverFlip = ({ frontSide, backSide, clas }) => {
  return (
    <div className={`leftWrap ${clas}`}>
      <div className="sidesWrap">
        <div className="leftFrontWrap">{frontSide}</div>

        <div className="leftBackWrap">{backSide}</div>
      </div>
    </div>
  );
};

export default HoverFlip;

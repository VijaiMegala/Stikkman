import React from "react";
import bannerStyles from "../Banner/banner.module.scss";;

const TitleSection = () => {
  return (
    <div className={bannerStyles.bannerMiddle}>
      <span>A LOREM IPSUM</span>
      <div className={bannerStyles.bannerMiddleRight}>
        <span><i>in </i>LOREM IPSUM</span>
      </div>
    </div>
  );
};

export default TitleSection;

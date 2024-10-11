import React from "react";
import { Rainy } from "../Images/Weather/Rainy";
import bannerStyles from "../Banner/banner.module.scss";

const WeatherSection = () => {
  return (
    <div className={bannerStyles.bannerBottomConMainTwoWeather}>
      <span>27</span>
      <Rainy />
      <span>lorem</span>
    </div>
  );
};

export default WeatherSection;

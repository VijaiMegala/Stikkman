"use client"
"use client"
import React from "react";
import bannerStyles from "./banner.module.scss";
import { VerticalLine } from "../Images/VerticalLine/VerticalLine";
import LogoSection from "../Sections/LogoSection";
import TitleSection from "../Sections/TitleSection";
import ProfileSection from "../Sections/ProfileSection";
import ButtonSection from "../Sections/ButtonSection";
import WeatherSection from "../Sections/WeatherSection";

export const Banner = () => {
  return (
    <div className={bannerStyles.bannerCon}>
      <video
        autoPlay
        muted
        loop
        className={bannerStyles.backgroundVideo}
        loading="lazy"
      >
        <source src="/bg_video.mp4" type="video/mp4" />
        <source src="/bg_video.webm" type="video/webm" />
        <source src="/bg_video.ogv" type="video/ogg" />
      </video>

     

      <TitleSection />

      <div className={bannerStyles.bannerBottomCon}>
        <div className={bannerStyles.bannerBottomConMain}>
          <ProfileSection />
          {/* <ButtonSection /> */}
          <div className={bannerStyles.bannerBottomConSub}>
          <WeatherSection />
          <VerticalLine />
          </div>
        </div>
      </div>
    </div>
  );
};


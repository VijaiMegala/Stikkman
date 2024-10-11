import React from "react";
import Image from "next/image";
import ProfileImage from "../../asserts/profile.jpeg";
import bannerStyles from "../Banner/banner.module.scss";;

const ProfileSection = () => {
  return (
    <div className={bannerStyles.bannerBottomConMainOne}>
      <Image
        alt="profile image"
        src={ProfileImage}
        width="40"
        height="40"
        style={{ borderRadius: "50%" }}
      />
      <span>lorem by</span>
      <span style={{ fontWeight: "700" }}>Lorem & Ipsum lorem</span>
    </div>
  );
};

export default ProfileSection;

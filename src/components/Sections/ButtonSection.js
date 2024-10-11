import React from "react";
import { Phone } from "../Images/Phone/Phone";
import { Calender } from "../Images/Calender/Calender";
import { CalenderSmall } from "../Images/Calender/CalenderSmall";
import { PhoneSmall } from "../Images/Phone/PhoneSmall";
import buttonStyles from "../../styles/button.module.scss";

const ButtonSection = ({ isPageTwoVisible, isPageTwoDescVisible }) => {
  const marginBottomValue = isPageTwoVisible ? "12%" : "17%";

  const marginLeftValue = isPageTwoDescVisible ? "70%" : "0%";
  console.log(isPageTwoDescVisible)

  return (
    <div
      className={buttonStyles.BtnGrp}
      style={{
        marginBottom: marginBottomValue,
        marginLeft: marginLeftValue,
        transition: "all 0.5s ease",
      }}
    >
      <div className={buttonStyles.Btn}>
        {isPageTwoDescVisible ? <CalenderSmall /> : <Calender />}
        {!isPageTwoDescVisible && <span>LOREM</span>}
      </div>
      <div
        className={buttonStyles.Btn}
        style={{
          borderLeft: isPageTwoDescVisible
            ? "1px solid #4d5555"
            : "1px solid white",
        }}
      >
        {isPageTwoDescVisible ? <PhoneSmall /> : <Phone />}
        {!isPageTwoDescVisible && <span>IPSUM</span>}
      </div>
    </div>
  );
};

export default ButtonSection;

"use client";
import React, { useEffect, useRef } from "react";
import PageTwoStyles from "./pageTwo.module.scss";
import { VerticleLine2 } from "../Images/VerticalLine/VerticleLine2";
import Image from "next/image";
import ProfileImg from "../../asserts/profile.jpeg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const PageTwo = () => {
  const imgContainerRef = useRef(null); // Reference for the image container
  const imgRef = useRef(null); // Reference for the image itself
  const textRef = useRef(null); // Reference for the text container

  useEffect(() => {
    console.log("useEffect is running"); // Check if the effect runs
    console.log("Image container ref:", imgContainerRef.current); // Check ref

    if (imgContainerRef.current && imgRef.current && textRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imgContainerRef.current,
          start: "top center", // When the top of the container hits the center of the viewport
          end: "top top", // When the top of the container hits the top of the viewport
          scrub: 1, // Smooth scrubbing
          pin: true, // Pin the container to the top of the viewport
          pinSpacing: false, // Disable extra spacing when pinned
        //   onEnter: () => console.log("onEnter triggered"),
        //   onLeave: () => console.log("onLeave triggered"),
        //   onEnterBack: () => console.log("onEnterBack triggered"),
        //   onLeaveBack: () => console.log("onLeaveBack triggered"),
        },
      });

      // Set initial position
      gsap.set(imgContainerRef.current, { position: "fixed", top: 0, left: 0, width: 249, height: 307 });
      gsap.set(imgRef.current, { width: 249, height: 307 });
      gsap.set(textRef.current, { opacity: 1 }); // Ensure text starts visible

      // Image size animation on scroll
      tl.to(imgRef.current, {
        top:0,
        width: 400,
        height: 450,
        ease: "power2.inOut",
      });

      // Container size animation
      tl.to(imgContainerRef.current, {
        top:0,
        width: 400,
        height: 350,
        ease: "power2.inOut",
      }, "<");

      // Left position animation after 30% scroll with delay
      tl.to(imgContainerRef.current, {
        top:0,
        left: 0,
        duration: 0.5, // Animation duration for the left position change
        delay: 0.5, // Delay before the left animation starts
        ease: "power2.inOut",
      }, "<");

      // Text fade out animation
      tl.to(textRef.current, {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top center", // Fade out when the text reaches the center of the viewport
          end: "top top", // Fade out fully before it hits the top
          scrub: true,
        },
        ease: "power2.inOut",
      }, "<");

      // Text fade in animation when scrolling back up
      tl.to(textRef.current, {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom", // Fade in when the text reaches the bottom of the viewport
          end: "top center", // Fade in fully before it hits the center
          scrub: true,
        },
        ease: "power2.inOut",
      }, "<");
    }
  }); // Ensure to include shouldAnimate for updates

  return (
    <div className={PageTwoStyles.pageTwoMainCon} style={{ overflow: "hidden" }}>
      <div className={PageTwoStyles.pageTwoContentMain}>
        <VerticleLine2 />
        <div
          ref={textRef}
          className={PageTwoStyles.pageTwoContentMainMiddle}
        >
          <span>
            LOREM INTO IPSUM <br />
            A LOREM <i>in</i> the IPSUM
          </span>
        </div>

        <div
          ref={imgContainerRef}
          className={PageTwoStyles.pageTwoContentMainImgCon}
        >
          <Image
            ref={imgRef}
            alt="Profile img"
            src={ProfileImg}
            width={249}
            height={307}
            style={{ borderRadius: "10%" }}
          />
        </div>
      </div>
    </div>
  );
};

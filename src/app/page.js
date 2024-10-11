"use client";
import React, { useEffect, useState, useCallback } from "react";
import mainStyles from "../styles/main.module.scss";
import { Banner } from "@/components/Banner/Banner";
import { PageTwo } from "@/components/PageTwo/PageTwo";
import { gsap } from "gsap";
import LogoSection from "@/components/Sections/LogoSection";
import ButtonSection from "@/components/Sections/ButtonSection";
import { PageTwoDesc } from "@/components/PageTwo/Desc/PageTwoDesc";
import { Menu } from "@/components/Images/Menu/Menu";
import buttonStyles from "../styles/button.module.scss"
import pageTwoDescStyles from "../components/PageTwo/Desc/pageTwoDesc.module.scss"

export default function Home() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPageTwoVisible, setIsPageTwoVisible] = useState(false);
  const [isPageTwoDescVisible, setIsPageTwoDescVisible] = useState(false);
  const [isWhiteLogo, setIsWhiteLogo] = useState(false);

  const handleTransitionToPageTwo = useCallback(() => {
    if (!isTransitioning && !isPageTwoVisible) {
      setIsTransitioning(true);
      setIsPageTwoVisible(true);
      setIsWhiteLogo(true);

      // Animate banner sliding out
      gsap.to(".bannerCon", {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => {
          document.querySelector(".bannerCon").style.display = "none";
        },
      });

      // Show PageTwo and animate it sliding down
      document.querySelector(".pageTwo").style.display = "block";
      gsap.fromTo(
        ".pageTwo",
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power1.inOut", onComplete: () => {
            setIsTransitioning(false);
          }
        }
      );

      // Animate the menu margin change
      gsap.to(".menu", {
        marginTop: "38px", // Increase margin-top when transitioning to PageTwo
        duration: 0.5,
        ease: "power1.inOut",
        display: "flex",
      });
    }
  }, [isTransitioning, isPageTwoVisible]);



  useEffect(() => {
    // PageTwoDesc Observer for margin-left change and button style updates
    const pageTwoDescElement = document.querySelector(
      `.${pageTwoDescStyles.pageTwoDescCon}`
    );

    const observerForPageTwoDesc = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("PageTwoDesc is in view");
            setIsPageTwoDescVisible(true);
          } else {
            console.log("PageTwoDesc is out of view");
            setIsPageTwoDescVisible(false);
          }
        });
      },
      { threshold: 0.5 } // Adjust as needed
    );

    if (pageTwoDescElement) {
      observerForPageTwoDesc.observe(pageTwoDescElement);
    }

    return () => {
      if (pageTwoDescElement) {
        observerForPageTwoDesc.unobserve(pageTwoDescElement);
      }
    };
  }, []);

  const handleTransitionToBanner = useCallback(() => {
    if (!isTransitioning && isPageTwoVisible) {
      setIsTransitioning(true);
      setIsPageTwoVisible(false);
      setIsWhiteLogo(false);
  
      // Animate PageTwo to slide down and fade out
      gsap.to(".pageTwo", {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => {
          document.querySelector(".pageTwo").style.display = "none";
        },
      });
  
      // Show Banner and animate it sliding down
      document.querySelector(".bannerCon").style.display = "block";
      gsap.fromTo(
        ".bannerCon",
        { y: "-100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power1.inOut",
          onComplete: () => {
            setIsTransitioning(false);
          },
        }
      );
  
      // Reset ButtonSection styles when going back to the banner
      gsap.to(`.${buttonStyles.BtnGrp}`, {
        height: "47px",
        padding: "8px 16px",
        backgroundColor: "#4d5555",
        marginBottom: "17%", // Reset margin-bottom to the original value
        duration: 0.5,
        ease: "power1.inOut",
      });
  
      // Animate the menu margin change
      gsap.to(".menu", {
        marginTop: "0px", // Reset margin-top when transitioning back to Banner
        duration: 0.5,
        ease: "power1.inOut",
        display: "none",
      });
    }
  }, [isTransitioning, isPageTwoVisible]);
  
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        handleTransitionToPageTwo();
      } else {
        handleTransitionToBanner();
      }
    };

    const handleKeyPress = (e) => {
      if (e.key === "ArrowDown") {
        handleTransitionToPageTwo();
      } else if (e.key === "ArrowUp") {
        handleTransitionToBanner();
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleTransitionToPageTwo, handleTransitionToBanner]);

  useEffect(() => {
    // PageTwoDesc Observer for center alignment and margin-left change
    const pageTwoDescElement = document.querySelector(`.${pageTwoDescStyles.pageTwoDescCon}`);

    const observerForPageTwoDesc = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("PageTwoDesc is in view, applying margin change");
            setIsPageTwoDescVisible(true); // Trigger visibility change for ButtonSection

            gsap.to(`.${buttonStyles.BtnGrp}`, {
              marginLeft: "0%",
              backgroundColor:"#4d5555",
              height: "47px",
              duration: 0.5,
              ease: "power1.inOut",
            });
          } else {
            console.log("PageTwoDesc is out of view, resetting margin");
            setIsPageTwoDescVisible(false); // Reset visibility for ButtonSection

            gsap.to(`.${buttonStyles.BtnGrp}`, {
              marginLeft: "70%",
              backgroundColor:"rgba(255, 255, 255, 1)",
              height:"39px",
              duration: 0.5,
              ease: "power1.inOut",
            });
          }
        });
      },
      { threshold: 1 } // When PageTwoDesc is fully in view
    );

    if (pageTwoDescElement) {
      observerForPageTwoDesc.observe(pageTwoDescElement);
    }

    return () => {
      if (pageTwoDescElement) {
        observerForPageTwoDesc.unobserve(pageTwoDescElement);
      }
    };
  }, []);

  

  return (
    <div className={mainStyles.mainCon}>
      <LogoSection isWhite={isWhiteLogo} />
      <div className={`${mainStyles.menu} menu`}>
        <Menu />
      </div>
      <div className={mainStyles.buttonSection}>
        <ButtonSection isPageTwoVisible={isPageTwoVisible} isPageTwoDescVisible={isPageTwoDescVisible} />
      </div>
      <div className="bannerCon" style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 2 }}>
        <Banner />
      </div>
      <div className="pageTwo" style={{ opacity: 0, display: 'flex', position: "absolute", top: 0, left: 0, right: 0, zIndex: 1, overflow: "hidden" }}>
        <PageTwo shouldAnimate={isPageTwoVisible} />
        <div>
          <PageTwoDesc />
        </div>
      </div>
    </div>
  );
}

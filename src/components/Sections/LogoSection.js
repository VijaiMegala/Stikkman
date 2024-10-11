import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import styles from '../../styles/main.module.scss';
import { LogoWhite } from '../Images/LogoWhite/LogoWhite';
import { Logo } from '../Images/Logo/Logo';

const LogoSection = ({ isWhite }) => {
  const logoRef = useRef(null);
  const whiteLogoRef = useRef(null);

  useEffect(() => {
    if (isWhite) {
      gsap.to(logoRef.current, {
        opacity: 0, 
        duration: 0,
        ease: "power1.inOut",
        onComplete: () => {
          logoRef.current.style.display = "none";
          whiteLogoRef.current.style.display = "block";
          gsap.fromTo(whiteLogoRef.current, {
            opacity: 0,
            visibility: "visible" 
          }, {
            opacity: 1, 
            duration: 0,
            ease: "power1.inOut"
          });
        }
      });
    } else {
      gsap.to(whiteLogoRef.current, {
        opacity: 0, 
        duration: 0,
        ease: "power1.inOut",
        onComplete: () => {
          whiteLogoRef.current.style.display = "none";
          logoRef.current.style.display = "block"; 
          gsap.fromTo(logoRef.current, {
            opacity: 0, 
            visibility: "visible"
          }, {
            opacity: 1, 
            ease: "power1.inOut"
          });
        }
      });
    }
  }, [isWhite]);

  return (
    <div className={styles.logoPosition}>
      <div ref={logoRef} style={{ display: isWhite ? "none" : "block" }}>
        <Logo />
      </div>
      <div ref={whiteLogoRef} style={{ display: isWhite ? "block" : "none" }}>
        <LogoWhite />
      </div>
      {!isWhite && <span>Lorem Ipsum</span>}
    </div>
  );
};

export default LogoSection;


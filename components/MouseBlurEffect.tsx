"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

interface MouseBlurEffectProps {
  isShown: boolean;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

const MouseBlurEffect: React.FC<MouseBlurEffectProps> = ({
  isShown,
  buttonRef,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (buttonRef.current) {
        x.set(event.clientX - buttonRef.current.offsetLeft);
        y.set(event.clientY - buttonRef.current.offsetTop);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y, buttonRef]);

  useEffect(() => {
    let hideTimer: number;

    if (!isShown) {
      hideTimer = window.setTimeout(() => {
        setIsHidden(true);
      }, 3000); // Adjust the delay as needed
    }

    return () => {
      clearTimeout(hideTimer);
    };
  }, [isShown, isHidden]);

  return (
    <>
      {isShown && buttonRef.current && (
        <motion.div
          className="fixed z-50 lg:block duration-75 ease-in-out transition bg-gradient-to-l from-rose-700 to-rose-800"
          style={{
            width: buttonRef.current.clientWidth,
            height: buttonRef.current.clientHeight,
            borderRadius: "80%",
            pointerEvents: "none",
            filter: "blur(25px)",
            mixBlendMode: "overlay",
            opacity: 0.9,
            position: "fixed",
            left: buttonRef.current.offsetLeft,
            top: buttonRef.current.offsetTop,
            translateX: x,
            translateY: y,
            transition: "transform 0.3s ease-out",
          }}
        ></motion.div>
      )}
    </>
  );
};

export default MouseBlurEffect;

'use client'

import React from "react";
import { useState, useEffect } from "react";

import  Image  from "next/image";

import {TransitionEffect} from "../lib/transition-effect";

import PrimaryButton from "./primary-button";
import PreviewSphere from "./preview-sphere";
import GreenGlobe from "../../public/hero-globe.png";




export default function Hero() {

  const [screenSize, setScreenSize] = useState({ width: 0 });
console.log(screenSize)
  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({ width: window.innerWidth });
    };

    // Initial size on mount
    updateScreenSize();

    // Event listener for resizing
    window.addEventListener("resize", updateScreenSize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);


const { transitionRef, determineTransitionType } = TransitionEffect();

  const handleClick = () => {
    window.location.href = '/globe';
  };

  return (
    <section style={determineTransitionType("translateY(0px)")} className="space-y-6 pt-6  md:pt-10 lg:pt-28 bg-primary-bg-color">
      <div ref={transitionRef} className="container sm:h-[45rem] md:h-[50rem] flex max-w-[74rem] flex-col items-center gap-4 text-center">
        <h1 className="text-primary-font-color font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          volumeLight <br />A Voice {" "}
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            {" "}
            Visualizer
          </span>
        </h1>
        <p className="max-w-[42rem] text-stone-600 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Watch as our 3D globe changes from red to yellow to green, giving you
          instant, easy-to-understand feedback on your speech volume.
        </p>
        <div className="space-x-4">
          <div onClick={handleClick} >
            <PrimaryButton>Try for Free</PrimaryButton>
          </div>
        </div>
        {screenSize.width >= 768 ?<div className="w-full h-full z-50"> <PreviewSphere className="z-0" /></div> : <Image src={GreenGlobe} alt={"Green globe"}/>}
      </div>
      
    </section>
  );
}


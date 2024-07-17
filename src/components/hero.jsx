'use client'

import React from "react";
import Link from "next/link";
import  Image  from "next/image";

import {TransitionEffect} from "../lib/transition-effect";

import PrimaryButton from "./primary-button";
import GreenGlobe from "../../public/hero-globe.png";


export default function Hero() {


const { transitionRef, determineTransitionType } = TransitionEffect();

  return (
    <section style={determineTransitionType("translateY(0px)")} className="space-y-6 pt-12  md:pt-20 lg:pt-28 bg-primary-bg-color">
      <div ref={transitionRef} className="container sm:h-[35rem] md:h-[40rem] lg:h-[55rem] flex max-w-[74rem] flex-col items-center gap-4 text-center">
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
          <Link href={'/globe'} >
            <PrimaryButton>Try for Free</PrimaryButton>
          </Link>
        </div>
        <Image src={GreenGlobe} alt={"Green globe"}/>
      </div>
      
    </section>
  );
}


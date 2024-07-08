'use client'

// In your Hero component
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import PrimaryButton from "./primary-button";
import PreviewSphere from "./preview-sphere";
import { Canvas, useFrame, invalidate, useLoader } from "@react-three/fiber";


export default function Hero() {

  const handleClick = () => {
    window.location.href = '/globe';
  };

  return (
    <section className="space-y-6 pt-6  md:pt-10 lg:pt-32 bg-primary-bg-color">
      <div className="container h-[55rem] flex max-w-[74rem] flex-col items-center gap-4 text-center">
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
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
        <PreviewSphere />
      </div>
    </section>
  );
}


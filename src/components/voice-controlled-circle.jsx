"use client";

import { Suspense, useRef } from "react";
import { useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { suspend } from "suspend-react";
import { Html } from "@react-three/drei";

import LoadingDots from "./loading-dots";

export default function VoiceControlledSphere({ ambientNoiseFilter, setAmbientNoiseFilter }) {
  function Track({ radius = 1, ...props }) {
    const ref = useRef();
    const { update } = suspend(() => createAudio(), []);

    let smoothAvg = 0;
    const decayFactor = 0.97;

    useFrame(() => {
      if (!ref.current) return;
      let avg = update();

      smoothAvg = (+ambientNoiseFilter + avg - 10) * (1 - decayFactor) + smoothAvg * decayFactor;
      ref.current.scale.setScalar(1 + smoothAvg / 500);

      const hue = (smoothAvg / 255) * 360;
      ref.current.material.color.setHSL(hue / 360, 1, 0.5);
    });

    return (
      <mesh ref={ref} {...props}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
    );
  }

  const [error, setError] = useState(null);

  async function createAudio() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const context = new AudioContext();
      const source = context.createMediaStreamSource(stream);
      const analyser = context.createAnalyser();

      analyser.fftSize = 32;
      const data = new Uint8Array(analyser.frequencyBinCount);

      source.connect(analyser);

      return {
        data,
        update: () => {
          analyser.getByteFrequencyData(data);
          return data.reduce((prev, cur) => prev + cur, 0) / data.length;
        },
      };
    } catch (error) {
      console.error("There was an error getting the audio stream:", error);
      setError("There was an error getting the audio stream. You may need to enable your microphone in your browser settings.");
      return {
        data: new Uint8Array(),
        update: () => 0,
      };
    }
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const mobileCheck = /iPhone|iPod|Android|Windows Phone|BB10|BlackBerry|Tizen|KaiOS/i.test(navigator.userAgent);
      setIsMobile(mobileCheck);
    }
  }, []);

  const LoadingScreen = () => (
    <Html center>
      <div className="w-full h-screen mt-[20rem]">
        <LoadingDots />
      </div>
    </Html>
  );

  if (error) return <div className="w-full h-screen mt-[20rem text-center mt-10 p-6 text-red-600">{error}</div>;

  return (
    <Canvas dpr={isMobile ? [0.1, 1.4] : [1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
      <Suspense fallback={<LoadingScreen />}>
        <directionalLight position={[2, 1, 5]} intensity={1} />
        <Track position={[0, .7, 0]} />
      </Suspense>
    </Canvas>
  );
}


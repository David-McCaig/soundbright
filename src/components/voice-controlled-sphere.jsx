"use client";

import { Suspense, useRef } from "react";
import { useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { suspend } from "suspend-react";
import {
  Environment,
  OrbitControls,
  Center,
  Plane,
  AccumulativeShadows,
  RandomizedLight,
  Html
} from "@react-three/drei";

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

      smoothAvg = (+ambientNoiseFilter + avg - 15) * (1 - decayFactor) + smoothAvg * decayFactor;
      ref.current.scale.setScalar(1 + smoothAvg / 500);

      // More vibrant color calculation
      const hue = (smoothAvg / 255) * 360; // Full hue range
      const saturation = 1; // Maximum saturation
      const lightness = 0.5; // Mid-range lightness for vibrant colors
      ref.current.material.color.setHSL(hue / 360, saturation, lightness);

    });

    return (
      <mesh ref={ref} castShadow {...props}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshPhysicalMaterial
          metalness={0.1}
          roughness={0.3}
          envMapIntensity={1}
          clearcoat={2}
          clearcoatRoughness={0.2}
        />
      </mesh>
    );
  }

  const [error, setError] = useState(null); 

  async function createAudio() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const context = new (window.AudioContext || window.webkitAudioContext)();
      const source = context.createMediaStreamSource(stream);
      const analyser = context.createAnalyser();
      analyser.fftSize = 32;
      source.connect(analyser);
      const data = new Uint8Array(analyser.frequencyBinCount);
      return {
        context,
        source,
        data,
        update: () => {
          analyser.getByteFrequencyData(data);
          return (data.avg = data.reduce(
            (prev, cur) => prev + cur / data.length,
            0
          ));
        },
      };
    } catch (error) {
      setError("There was an error getting the audio stream. You may need to enable your microphone in your browser settings.")
      return {
        context: null,
        source: null,
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

  if(error) return  <div className="w-full h-screen mt-[20rem text-center mt-10 p-6 text-red-600">{error}</div> 

  return (
    <Canvas shadows dpr={isMobile ? [.1, 1.4] : [1, 2]} camera={{ position: [-4, 15, 3], fov: 20 }}>
      <Center middle>
        <color attach="background" args={["#e0e0e0"]} />
        <Suspense fallback={<LoadingScreen />}>
          <Track position={[0, 1.1, 0]} />
          <Plane
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1, 0]}
            args={[10, 10]}
          >
            <shadowMaterial transparent opacity={0.4} />
          </Plane>
          <AccumulativeShadows
            temporal
            frames={200}
            color="purple"
            colorBlend={0.5}
            opacity={1}
            scale={10}
            alphaTest={0.85}
          >
            <RandomizedLight
              amount={8}
              radius={5}
              ambient={0.5}
              position={[5, 3, 2]}
              bias={0.001}
            />
          </AccumulativeShadows>
          {/* Soft directional light from the front */}
          <directionalLight
            position={[0, 5, 5]}
            intensity={1}
            castShadow
          />
          <ambientLight intensity={0.5} />
        </Suspense>
        <OrbitControls
          autoRotateSpeed={4}
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Center>
    </Canvas>
  );
}



"use client";

import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { suspend } from "suspend-react";
import {
  Environment,
  OrbitControls,
  Center,
  Plane,
  AccumulativeShadows,
  RandomizedLight,
} from "@react-three/drei";

export default function PreviewSphere(props) {
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  function Track({ radius = 1, setIntervalId, ...props }) {
    const ref = useRef();
    const { update } = suspend(() => startCounting(setIntervalId), []);
  
    let smoothAvg = 0;
    const decayFactor = 0.97;
  
    useFrame(() => {
      let avg = update();
      smoothAvg = avg * (1 - decayFactor) + smoothAvg * decayFactor;
      ref.current.scale.setScalar(1 + smoothAvg / 500);
  
      // More vibrant color calculation
      const hue = (smoothAvg / 255) * 360; // Full hue range
      const saturation = 1; // Maximum saturation
      const lightness = 0.5; // Mid-range lightness for vibrant colors
      ref.current.material.color.setHSL(hue / 360, saturation, lightness);
    });
  
    return (
      <mesh ref={ref} castShadow {...props}>
        <sphereGeometry args={[radius, 64, 64]} />
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

  function startCounting(setIntervalId) {
    return new Promise((resolve) => {
      let count = 20;
      let increment = 1;
      const maxCount = 50;
      const minCount = 0;
      const duration = 8000; // duration for each phase (up and down) in milliseconds
      const stepTime = duration / (maxCount - minCount);
  
      const updateCount = () => {
        count += increment;
  
        if (count >= maxCount) {
          increment = -1; // switch to counting down
        } else if (count <= minCount) {
          increment = 1; // switch to counting up
        }
      };
  
      const id = setInterval(updateCount, stepTime);
      setIntervalId(id);
  
      resolve({
        update: () => count,
      });
    });
  }

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [-4, 15, 3], fov: 20 }}>
      <Center middle>
        <color attach="background" args={["#e0e0e0"]} />
        <Suspense fallback={null}>
          <Environment preset="sunset" background={false} />
          <Track position={[0, 1.1, 0]} setIntervalId={setIntervalId} />
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
        </Suspense>
        <OrbitControls
          autoRotateSpeed={4}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Center>
    </Canvas>
  );
}



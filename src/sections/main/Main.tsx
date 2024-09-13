"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Obj } from './components/Obj';
import { PerspectiveCamera, Stars } from '@react-three/drei';
import CanvasLoader from '@/shared/loaders/CanvasLoader';

export function Main() {
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Eric <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
      </div>

      <div className="w-full h-full absolute inset-0">
      <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            
            <Stars
              radius={100}   // Radius of the star field
              depth={50}     // Depth of star field
              count={50000}   // Number of stars
              factor={3}     // Size factor for the stars
              saturation={0.2} // Star color saturation
              fade={true}    // Whether stars should fade when moving away
            />

            {/* <HeroCamera isMobile={isMobile}>
              <Desk scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera> */}

            <group>
              <Obj />
            </group>

            <ambientLight intensity={1} color={"white"} />
            {/* <directionalLight position={[0, -10, 0]} intensity={1} /> */}
          </Suspense>
          </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          {/* <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" /> */}
        </a>
      </div>
    </section>
  );
}

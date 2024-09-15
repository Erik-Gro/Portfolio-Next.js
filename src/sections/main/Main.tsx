"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Stars } from '@react-three/drei';
import CanvasLoader from '@/shared/loaders/CanvasLoader';
import ReactLogo from './components/ReactLogo';
import useCalculateSizes from './data/Sizes';
import { useMediaQuery } from 'react-responsive';
import Macbook from './components/Macbook';
import Rotate from '../utils/Rotate';
import Target from './components/Target';
import Cube from './components/Cube';
import Rings from './components/Rings';
import Button from '@/shared/components/button.tsx/Button';
import Room from './components/Room';
import PythonLogo from './components/PythonLogo';

export function Main() {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = useCalculateSizes(isSmall, isMobile, isTablet);
  
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

            <Rotate isMobile={isMobile}>
              <Room scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </Rotate>

            <group>
              <ReactLogo position={sizes.reactLogoPosition} scale={sizes.reactLogoScale}/>
              <Macbook position={sizes.macBookPosition}/>
              <PythonLogo  position={sizes.pythonPosition} />
              <Target position={sizes.targetPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} /> 
            </group>

            <ambientLight intensity={0.8}  />
            <directionalLight position={[0, 3, 10]} intensity={1} />
          </Suspense>
          </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
}

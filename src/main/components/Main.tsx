"use client"; // Ensure client-side rendering

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Obj } from './Obj';

export function Main() {
  return (
    <Canvas>
      <Obj />
    </Canvas>
  );
}

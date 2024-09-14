"use client"
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: xenadus (https://sketchfab.com/xenadus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
Title: React logo
*/

import * as THREE from 'three'
import React, { memo, useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeObjectProps } from '../types/shared'

type GLTFResult = GLTF & {
  nodes: {
    ['React-Logo_Material002_0']: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

export function ReactLogo({ position = [0,0,0], scale = [1,1,1], ...props }:ThreeObjectProps) {
  const { nodes, materials } = useGLTF('/models/react.glb') as GLTFResult
  return (
    <Float floatIntensity={10} >
    <group position={position} scale={scale} dispose={null}>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes['React-Logo_Material002_0'].geometry}
        material={materials['Material.002']}
        position={[0, 0.079, 0.181]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.392, 0.392,  0.392]}
      />
    </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')

export default memo(ReactLogo)
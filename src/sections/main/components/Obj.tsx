"use client"

// Auto-generated by: https://github.com/pmndrs/gltfjsx
// Author: AnshiNoWara (https://sketchfab.com/AnshiNoWara)
// License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
// Source: https://sketchfab.com/3d-models/python-8be4a2579dd84586b915068e475073ee
// Title: Python


import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    Python_Python_0: THREE.Mesh
  }
  materials: {
    Python: THREE.MeshStandardMaterial
  }
}

export function Obj(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/python.glb') as GLTFResult
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Iterate over all children of the group
      groupRef.current.children.forEach((child) => {
          // Perform operations on the mesh, for example, rotating it
          child.rotation.y += delta;
      });
    }
  });
  return (
    <group ref={groupRef}{...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Python_Python_0.geometry}
          material={materials.Python}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/python.glb')

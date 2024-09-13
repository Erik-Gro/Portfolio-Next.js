"use client"
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
    Object_6: THREE.Mesh
  }
  materials: {
    material: THREE.MeshStandardMaterial
    ['.001']: THREE.MeshStandardMaterial
  }
}

export function Obj(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes } = useGLTF('/python_programming_language.glb') as GLTFResult

  // Animation: make the model move up and down and spin around the Y axis
  useFrame(({ clock }) => {
    if (group.current) {
      // Up-and-down movement
      group.current.position.y = Math.sin(clock.getElapsedTime()) * 3

      // Spin around Y-axis
      group.current.rotation.y += 0.01 // Adjust speed by changing this value
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        // Use MeshBasicMaterial to make the model independent of lighting
        material={new THREE.MeshBasicMaterial({ color: 'orange' })}
        position={[-0.002, 0, 0]}
        // Incline the model along the Z-axis
        rotation={[Math.PI / 2, 0, Math.PI / 8]} // slight inclination on Z-axis (Math.PI / 8)
        scale={2.501}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={new THREE.MeshBasicMaterial({ color: 'blue' })}
        position={[-0.002, 0, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI + Math.PI / 8]} // same inclination on Z-axis
        scale={2.501}
      />
    </group>
  )
}

useGLTF.preload('/python_programming_language.glb')

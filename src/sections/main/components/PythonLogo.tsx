import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_6: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshStandardMaterial;
    ['.001']: THREE.MeshStandardMaterial;
  };
};

export function PythonLogo(props: any) {
  const { nodes, materials } = useGLTF('/models/python.glb') as GLTFResult;

  // Create a reference to the group
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Continuous rotation along X-axis and Y-axis
      groupRef.current.rotation.x += delta * 0.5; // Slow continuous rotation on X-axis (optional)
      groupRef.current.rotation.y += delta * 1; // Faster continuous rotation on Y-axis
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material}
        position={[-0.002, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]} // Base rotation
        scale={2.501}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['.001']}
        position={[-0.002, 0, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI]} // Base rotation
        scale={2.501}
      />
    </group>
  );
}

useGLTF.preload('/models/python.glb');

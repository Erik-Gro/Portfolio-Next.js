import * as THREE from 'three';
import React, { memo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { GLTF } from 'three-stdlib';
import { ThreeObjectProps } from '../types/shared';

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

const PythonLogo: React.FC<ThreeObjectProps> = ({ ...props }) => {
  const { nodes, materials } = useGLTF('/models/python.glb') as GLTFResult;

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.5;
      groupRef.current.rotation.y += delta * 1;
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
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.501}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['.001']}
        position={[-0.002, 0, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI]} 
        scale={2.501}
      />
    </group>
  );
}

useGLTF.preload('/models/python.glb');

export default memo(PythonLogo)

import { memo, useEffect, useRef, useState } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';
import { Mesh, MeshStandardMaterial, BufferGeometry, Group, Texture } from 'three';
import { useFrame } from '@react-three/fiber';
import { ThreeObjectProps } from '../types/shared';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cube: Mesh
  }
  materials: {}
}

const Cube: React.FC<ThreeObjectProps> = ({ position = [0, 0, 0], ...props }) => {
  const { nodes } = useGLTF('models/cube.glb') as GLTFResult; 
  const texture = useTexture('textures/cube.png');

  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const elapsedTime = state.clock.getElapsedTime();
      const scaleAmplitude = 0.5; 
  
      const scale = scaleAmplitude * Math.sin( elapsedTime);
      groupRef.current.scale.set(scale, scale, scale);
    }
  });
  

  return (
    <Float floatIntensity={2}>
      <group ref={groupRef} position={position} rotation={[0, 0, 0]} scale={100} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}>
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload('models/cube.glb');

export default memo(Cube);
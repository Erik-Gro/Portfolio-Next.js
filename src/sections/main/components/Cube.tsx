import { memo, useEffect, useRef, useState } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';
import { Mesh, MeshStandardMaterial, BufferGeometry, Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { ThreeObjectProps } from '../types/shared';


const Cube: React.FC<ThreeObjectProps> = ({ position = [0, 0, 0], ...props }) => {
  const { nodes } = useGLTF('models/cube.glb');
  const texture = useTexture('textures/cube.png');

  const cubeRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const originalRotation = useRef<[number, number, number]>([0, 0, 0]);
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
      <group ref={groupRef} position={position} rotation={[0, 0, 0]} scale={100} dispose={null} {...props}>
        {nodes.Cube && ('geometry' in nodes.Cube) && ('material' in nodes.Cube) && (
          <mesh
            ref={cubeRef}
            castShadow
            receiveShadow
            geometry={(nodes.Cube as CubeNode).geometry}
            material={(nodes.Cube as CubeNode).material}
            onPointerEnter={() => {
              setHovered(true);
              originalRotation.current = [cubeRef.current.rotation.x, cubeRef.current.rotation.y, cubeRef.current.rotation.z];
            }}
            onPointerLeave={() => setHovered(false)}>
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        )}
      </group>
    </Float>
  );
};

useGLTF.preload('models/cube.glb');

export default memo(Cube);
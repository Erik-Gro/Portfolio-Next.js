"use client"

import { Float, useGLTF, Gltf } from '@react-three/drei';
import { memo } from 'react';
import { Group, Mesh, MeshStandardMaterial, BufferGeometry } from 'three';

interface Props {
  position:[number,number,number]

}

const ReactLogo: React.FC<Props> = ({ position, ...props }) => {
  const { nodes, materials } = useGLTF('models/react.glb') as any;

  return (
    <Float floatIntensity={1}>
      <group position={position} scale={[0.3, 0.3, 0.3]} dispose={null} {...props}>
          <mesh geometry={nodes['React-Logo_Material002_0'].geometry}
                material={materials['Material.002']}
                position={[0, 0.079, 0.181]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.392, 0.392, 0.527]}
          />
      </group>
    </Float>
  );
};

useGLTF.preload('models/react.glb');

export default memo(ReactLogo);

import { useRef, useCallback } from 'react';
import { Center, Float, useTexture } from '@react-three/drei';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';

interface RingsProps {
  position: [number, number, number];
}

const Rings: React.FC<RingsProps> = ({ position=[0,0,0] }) => {
  const refList = useRef<THREE.Mesh[]>([]);
  
  // Callback to add meshes to refList
  const getRef = useCallback((mesh: THREE.Mesh | null) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  // Load texture
  const texture = useTexture('textures/rings.png');

  // UseFrame for animation
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    
    refList.current.forEach((r, index) => {
      // Set position based on props
    //   r.position.set(position[0], position[1], position[2]);

      // Staggered rotation
      const speed = 0.5 + index * 0.1;
      r.rotation.x = elapsedTime * speed;
      r.rotation.y = elapsedTime * speed;
    });
  });

  return (
    <Float floatIntensity={10}>
      <group scale={0.5} position={[0,0,0]}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

export default Rings;

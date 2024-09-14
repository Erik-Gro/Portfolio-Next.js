import { useRef, useCallback } from 'react';
import { Center, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Rings = ({ position }) => {
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture('textures/rings.png');

  // UseFrame hook for handling animations
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    
    refList.current.forEach((r, index) => {
      // Setting the position based on props
      r.position.set(position[0], position[1], position[2]);

      // Rotating rings over time, staggered by index
      const speed = 0.5 + index * 0.1; // Staggered rotation speed for each ring
      r.rotation.x = elapsedTime * speed;
      r.rotation.y = elapsedTime * speed;
    });
  });

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;

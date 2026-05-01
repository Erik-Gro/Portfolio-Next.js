// import { useRef, useCallback, memo } from 'react';
// import { Float, useTexture } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import { ThreeObjectProps } from '../types/shared';

// const Rings: React.FC<ThreeObjectProps> = ({ position=[0,0,0] }) => {
//   const refList = useRef<THREE.Mesh[]>([]);
  
//   // Callback to add meshes to refList
//   const getRef = useCallback((mesh: THREE.Mesh | null) => {
//     if (mesh && !refList.current.includes(mesh)) {
//       refList.current.push(mesh);
//     }
//   }, []);

//   const texture = useTexture('textures/rings.png');

//   useFrame(({ clock }) => {
//     const elapsedTime = clock.getElapsedTime();
    
//     refList.current.forEach((r, index) => {
//       // Set position based on props
//     //   r.position.set(position[0], position[1], position[2]);

//       const speed = 0.5 + index * 0.1;
//       r.rotation.x = elapsedTime * speed;
//       r.rotation.y = elapsedTime * speed;
//     });
//   });

//   return (
//     <Float floatIntensity={10}>
//       <group scale={0.5} position={position}>
//         {Array.from({ length: 4 }, (_, index) => (
//           <mesh key={index} ref={getRef}>
//             <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
//             <meshMatcapMaterial matcap={texture} toneMapped={false} />
//           </mesh>
//         ))}
//       </group>
//     </Float>
//   );
// };

// export default memo(Rings);

import { useRef, memo } from 'react';
import { Float, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ThreeObjectProps } from '../types/shared';

const Rings: React.FC<ThreeObjectProps> = ({ position = [0, 0, 0] }) => {
  const refList = useRef<(THREE.Mesh | null)[]>([]);

  const texture = useTexture('textures/rings.png');

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    
    refList.current.forEach((mesh, index) => {
      if (!mesh) return;

      const speed = 0.5 + index * 0.2;
      mesh.rotation.x = elapsedTime * speed;
      mesh.rotation.y = elapsedTime * speed * 0.8;
      
      const scale = 1 + Math.sin(elapsedTime + index) * 0.05;
      mesh.scale.set(scale, scale, scale);
    });
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group scale={0.5} position={position}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh 
            key={index} 
            // FIXED: Added curly braces so it returns 'void'
            ref={(el) => { refList.current[index] = el; }}
          >
            <torusGeometry args={[(index + 1) * 0.5, 0.05, 16, 100]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

export default memo(Rings);

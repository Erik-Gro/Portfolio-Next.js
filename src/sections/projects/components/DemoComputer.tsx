import { useRef, useEffect, memo } from 'react';
import { useGLTF, useVideoTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group, Mesh, MeshStandardMaterial } from 'three';
import { GLTF } from 'three-stdlib';

interface DemoComputerProps {
  texture?: string;
  direction?: string;
  cameraRef:any;
}

type GLTFResult = GLTF & {
  nodes: {
    ['monitor-screen']: Mesh
    ['Monitor-B-_computer_0_1']: Mesh
    ['Monitor-B-_computer_0_2']: Mesh
    ['Monitor-B-_computer_0_3']: Mesh
    ['Monitor-B-_computer_0_4']: Mesh
    ['Monitor-B-_computer_0_5']: Mesh
    ['Monitor-B-_computer_0_6']: Mesh
    ['Monitor-B-_computer_0_7']: Mesh
    ['Monitor-B-_computer_0_8']: Mesh
  }
  materials: {
    computer: MeshStandardMaterial
    base__0: MeshStandardMaterial
    Material_36: MeshStandardMaterial
    Material_35: MeshStandardMaterial
    Material_34: MeshStandardMaterial
    keys: MeshStandardMaterial
    keys2: MeshStandardMaterial
    Material_37: MeshStandardMaterial
  }
}


const DemoComputer = (props: DemoComputerProps) => {
  const group = useRef<Group>(null);  
  const { nodes, materials } = useGLTF('/models/computer.glb') as GLTFResult;  

  const txt = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4', {
    muted: true,       
    playsInline: true,  
  });

  useEffect(() => {
    if (txt) {
      txt.flipY = false;
    }
  }, [txt]);
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (group.current) {
      if(props.cameraRef.current){
        props.cameraRef.current.reset()
      }
      if (props.direction === 'previous') {
        group.current.rotation.y = -2;
      } else {
        group.current.rotation.y = 2;
      }
    }
  }, [txt, props.direction]);
   /* eslint-enable react-hooks/exhaustive-deps */

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += (0 - group.current.rotation.y) * 3 * delta;
    }
  });

  return (
    <group ref={group} dispose={null}>
       <group name="Scene">
        <mesh
          name="monitor-screen"
          // castShadow
          // receiveShadow
          geometry={nodes['monitor-screen'].geometry}
          material={nodes['monitor-screen'].material}
          position={[0.127, 1.831, 0.511]}
          rotation={[1.571, -0.005, 0.031]}
          scale={[0.661, 0.608, 0.401]}>
          <meshBasicMaterial map={txt} toneMapped={false} />
        </mesh>
        <group name="RootNode" position={[0, 1.093, 0]} rotation={[-Math.PI / 2, 0, -0.033]} scale={0.045}>
          <group
            name="Screen001"
            position={[5.658, 1.643, 0.812]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.923, 0.855, 0.855]}
          />
          
        </group> 
        <group
          name="Monitor-B-_computer_0"
          position={[0.266, 1.132, 0.051]}
          rotation={[0, -0.033, 0]}
          scale={[0.042, 0.045, 0.045]}>
          <mesh
            name="Monitor-B-_computer_0_1"
            // castShadow
            // receiveShadow
            geometry={nodes['Monitor-B-_computer_0_1'].geometry}
            material={materials.computer}
          />
          <mesh
            name="Monitor-B-_computer_0_2"
            // castShadow
            // receiveShadow
            geometry={nodes['Monitor-B-_computer_0_2'].geometry}
            material={materials.base__0}
          />
          <mesh
            name="Monitor-B-_computer_0_3"
            // castShadow
            // receiveShadow
            geometry={nodes['Monitor-B-_computer_0_3'].geometry}
            material={materials.Material_36}
          />
          <mesh
            name="Monitor-B-_computer_0_4"
            // castShadow
            // receiveShadow
            geometry={nodes['Monitor-B-_computer_0_4'].geometry}
            material={materials.Material_35}
          />
          <mesh
            name="Monitor-B-_computer_0_5"
            // castShadow
            // receiveShadow
            geometry={nodes['Monitor-B-_computer_0_5'].geometry}
            material={materials.Material_34}
          />
          <mesh
            name="Monitor-B-_computer_0_6"
            // castShadow
            // receiveShadow
            geometry={nodes['Monitor-B-_computer_0_6'].geometry}
            material={materials.keys}
          />
          <mesh
            name="Monitor-B-_computer_0_7"
            // castShadow
            // receiveShadow
            geometry={nodes['Monitor-B-_computer_0_7'].geometry}
            material={materials.keys2}
          />
          <mesh
            name="Monitor-B-_computer_0_8"
            // castShadow
            // receiveShadow
            geometry={nodes['Monitor-B-_computer_0_8'].geometry}
            material={materials.Material_37}
          />
        </group>
      </group>
    </group>
  );
};

export default memo(DemoComputer);

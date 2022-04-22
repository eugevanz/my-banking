import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const BoxComponent = ({ route }) => {
  // This reference will give us direct access to the THREE.Mesh object
  const gltf = useLoader(GLTFLoader, '@/public/models/Poimandres.gltf')
  const mesh = useRef(null);
  const vec = new THREE.Vector3();
  // Set up state for the hovered and active state
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(({ camera }, delta) => {
    active ? vec.set(2, 0, 1.9) : vec.set(0, 0, 1.9);
    camera.fov = 50;
    camera.lookAt(0, 0, 0);
    camera.position.lerp(vec, 0.06);
    camera.updateProjectionMatrix();
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
      <mesh ref={mesh} onClick={() => setActive(!active)}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial color='darkcyan' />
      </mesh>
      <directionalLight position={[5, 5, 5]} />
    </>
  );
};
export default BoxComponent;

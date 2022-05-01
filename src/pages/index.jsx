import { Canvas, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import supabase from '../helpers/supabaseClient';
// import Model from '../components/canvas/north-sea/Scene.server';
import Model from '../components/canvas/camera/Camera_01_4k.server';
import useStore from '../helpers/stateManagement';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useEffect } from 'react';
import { Vector3 } from 'three';

export async function getStaticProps() {
  // https://clycjngosnmxbwpovsdc.supabase.co/storage/v1/object/public/models/Camera/Camera_01_4k.gltf
  const { publicURL, error } = await supabase.storage
    .from('models')
    .getPublicUrl('Camera/Camera_01_4k.gltf');
  if (error) {
    throw error;
  }
  return {
    props: { publicURL }, // will be passed to the page component as props
  };
}

function CameraController() {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
}

export default function Page({ publicURL }) {
  // const {
  //   frustrum: { position },
  // } = useStore();

  const { x, y, z, zoom } = useControls({
    x: { value: -42, step: 0.1 },
    y: { value: 0, step: 0.1 },
    z: { value: 0, step: 0.1 },
    zoom: { value: 20, step: 0.1 },
  });

  return (
    <>
      <Canvas
        orthographic
        camera={{ zoom: 0 }}
        mode='concurrent'
        style={{ height: '100vh' }}
      >
        <Model publicURL={publicURL} />
        <CameraController />
        {/* <ambientLight /> */}
        <pointLight castShadow />
        <axesHelper args={[10]} />
      </Canvas>
    </>
  );
}

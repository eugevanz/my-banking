import { Canvas, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import supabase from '../helpers/supabaseClient';
import Model from '../components/canvas/office/Scene.server';
import useStore from '../helpers/stateManagement';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useEffect } from 'react';

export async function getStaticProps() {
  const { publicURL, error } = await supabase.storage
    .from('models')
    .getPublicUrl('60s_office_props/scene.gltf');
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
  const {
    frustrum: { position },
  } = useStore();

  // const { left, right, top, bottom, zoom } = useControls({
  //   left: { value: -2, step: 0.1 },
  //   right: { value: 2, step: 0.1 },
  //   top: { value: 2, step: 0.1 },
  //   bottom: { value: -2, step: 0.1 },
  //   zoom: { value: 100, step: 0.1 },
  // });

  return (
    <>
      <Canvas
        orthographic
        camera={{ zoom: 100 }}
        mode='concurrent'
        style={{ height: '100vh' }}
      >
        <Model publicURL={publicURL} position={position} />
        <CameraController />
        <ambientLight />
        <pointLight position={position} castShadow />
        <axesHelper args={[10]} />
      </Canvas>
    </>
  );
}

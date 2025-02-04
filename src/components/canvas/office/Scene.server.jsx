/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: SeanNicolas (https://sketchfab.com/SeanNicolas)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/60s-office-props-dc00ea320cfa4aad90811080270672db
title: 60's Office Props
*/

import React, { useRef, Suspense } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useGLTF, Html, useProgress } from '@react-three/drei';
import { useSpring, animated, easings, config } from '@react-spring/three';
import { Camera, Vector3 } from 'three';

function Loader() {
  const { progress } = useProgress();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span>{progress} % loaded</span>
    </div>
  );
}

export default function Model({ publicURL, position }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(publicURL);
  const { viewport } = useThree();
  // const springs = useSpring({
  //   rotation,
  //   position,
  //   config: {
  //     duration: 2000,
  //     precision: 0.001,
  //     easing: easings.easeInOutCubic,
  //   },
  // });

  useFrame(() => {
    group.current.position.lerp(position, 1);
    // camera.updateProjectionMatrix();
    // group.current.position.z = -3;
  });

  return (
    <Suspense fallback={<Loader />}>
      <group
        ref={group}
        dispose={null}
        args={[viewport.width, viewport.height]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <group>
          <group position={[-2.35, -0.12, 1.87]} scale={0.38}>
            <mesh
              geometry={nodes.Cube11647_0.geometry}
              material={materials['Material.035']}
            >
              <Html occlude>
                <button>First</button>
              </Html>
            </mesh>
            <mesh
              geometry={nodes.Cube11647_1.geometry}
              material={materials['Material.023']}
            />
            <mesh
              geometry={nodes.Cube11647_2.geometry}
              material={materials['Material.007']}
            />
            <mesh
              geometry={nodes.Cube11647_3.geometry}
              material={materials['Material.001']}
            />
          </group>
          <group
            position={[1.26, -2.32, 2.82]}
            rotation={[0.62, -0.29, -0.49]}
            scale={0.4}
          />
          <group
            position={[2.3, 0.87, 1.76]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={0.4}
          />
          <group
            position={[2.3, -1.37, 0.52]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0.4}
          />
          <group
            position={[1.32, -4.64, 0.14]}
            rotation={[-0.03, 0.04, -1.94]}
            scale={0.08}
          >
            <Html occlude>
              <button>Second</button>
            </Html>
            <mesh
              geometry={nodes.Cylinder006_0.geometry}
              material={materials['Material.027']}
            />
            <mesh
              geometry={nodes.Cylinder006_1.geometry}
              material={materials['Material.026']}
            />
          </group>
          <group
            position={[-0.15, -0.83, 1.81]}
            rotation={[-Math.PI / 2, 0, -1.87]}
            scale={0.16}
          >
            <mesh
              geometry={nodes.Cylinder005_0.geometry}
              material={materials['Material.011']}
            />
            <mesh
              geometry={nodes.Cylinder005_1.geometry}
              material={materials['Material.012']}
            />
            <mesh
              geometry={nodes.Cylinder005_2.geometry}
              material={materials['Material.000']}
            />
            <mesh
              geometry={nodes.Cylinder005_3.geometry}
              material={materials['Material.009']}
            />
            <mesh
              geometry={nodes.Cylinder005_4.geometry}
              material={materials['Material.010']}
            />
          </group>
          <group
            position={[0.22, -0.83, 1.81]}
            rotation={[-Math.PI / 2, 0, -1.45]}
            scale={0.16}
          >
            <mesh
              geometry={nodes.Cylinder004_0.geometry}
              material={materials['Material.011']}
            />
            <mesh
              geometry={nodes.Cylinder004_1.geometry}
              material={materials['Material.012']}
            />
            <mesh
              geometry={nodes.Cylinder004_2.geometry}
              material={materials['Material.000']}
            />
            <mesh
              geometry={nodes.Cylinder004_3.geometry}
              material={materials['Material.009']}
            />
          </group>
          <group
            position={[3.14, -0.67, 0.23]}
            rotation={[0, 0, -0.64]}
            scale={0.22}
          >
            <mesh
              geometry={nodes.Cylinder003_0.geometry}
              material={materials['Material.019']}
            />
            <mesh
              geometry={nodes.Cylinder003_1.geometry}
              material={materials['Material.020']}
            />
            <mesh
              geometry={nodes.Cylinder003_2.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group
            position={[2.04, -4.64, 0.08]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={0.08}
          >
            <mesh
              geometry={nodes.Cube025_0.geometry}
              material={materials['Material.028']}
            />
            <mesh
              geometry={nodes.Cube025_1.geometry}
              material={materials['Material.030']}
            />
            <mesh
              geometry={nodes.Cube025_2.geometry}
              material={materials['Material.032']}
            />
          </group>
          <group
            position={[-1.17, -4.64, 0.21]}
            rotation={[0, 0, -2.55]}
            scale={[0.13, 0.18, 0.07]}
          >
            <mesh
              geometry={nodes.Cube024_0.geometry}
              material={materials['Material.035']}
            />
          </group>
          <group position={[-1.13, -0.67, 0.26]} scale={0.23}>
            <mesh
              geometry={nodes.Cube023_0.geometry}
              material={materials['Material.034']}
            />
            <mesh
              geometry={nodes.Cube023_1.geometry}
              material={materials['Material.032']}
            />
            <mesh
              geometry={nodes.Cube023_2.geometry}
              material={materials['Material.031']}
            />
            <mesh
              geometry={nodes.Cube023_3.geometry}
              material={materials['Material.030']}
            />
            <mesh
              geometry={nodes.Cube023_4.geometry}
              material={materials['Material.014']}
            />
            <mesh
              geometry={nodes.Cube023_5.geometry}
              material={materials['Material.015']}
            />
            <mesh
              geometry={nodes.Cube023_6.geometry}
              material={materials['Material.016']}
            />
            <mesh
              geometry={nodes.Cube023_7.geometry}
              material={materials['Material.006']}
            />
          </group>
          <group
            position={[0.04, -0.84, 0.52]}
            rotation={[0, 0, -Math.PI]}
            scale={0.4}
          >
            <mesh
              geometry={nodes.Cube022_0.geometry}
              material={materials['Material.034']}
            />
            <mesh
              geometry={nodes.Cube022_1.geometry}
              material={materials['Material.033']}
            />
            <mesh
              geometry={nodes.Cube022_2.geometry}
              material={materials['Material.032']}
            />
            <mesh
              geometry={nodes.Cube022_3.geometry}
              material={materials['Material.031']}
            />
            <mesh
              geometry={nodes.Cube022_4.geometry}
              material={materials['Material.030']}
            />
            <mesh
              geometry={nodes.Cube022_5.geometry}
              material={materials['Material.029']}
            />
            <mesh
              geometry={nodes.Cube022_6.geometry}
              material={materials['Material.021']}
            />
            <mesh
              geometry={nodes.Cube022_7.geometry}
              material={materials['Material.013']}
            />
          </group>
          <group
            position={[-1.94, -2.64, 0.25]}
            rotation={[0, 0, 1.09]}
            scale={0.38}
          >
            <mesh
              geometry={nodes.Cube021_0.geometry}
              material={materials['Material.034']}
            />
            <mesh
              geometry={nodes.Cube021_1.geometry}
              material={materials['Material.032']}
            />
            <mesh
              geometry={nodes.Cube021_2.geometry}
              material={materials['Material.031']}
            />
            <mesh
              geometry={nodes.Cube021_3.geometry}
              material={materials['Material.030']}
            />
            <mesh
              geometry={nodes.Cube021_4.geometry}
              material={materials['Material.017']}
            />
            <mesh
              geometry={nodes.Cube021_5.geometry}
              material={materials['Material.018']}
            />
          </group>
          <group position={[1.02, -2.86, 0.85]} scale={0.42}>
            <mesh
              geometry={nodes.Cube020_0.geometry}
              material={materials['Material.023']}
            />
            <mesh
              geometry={nodes.Cube020_1.geometry}
              material={materials['Material.024']}
            />
          </group>
          <group
            position={[0.45, -4.61, 0.11]}
            rotation={[0, 0, 0.98]}
            scale={0.1}
          >
            <mesh
              geometry={nodes.Cube019_0.geometry}
              material={materials['Material.035']}
            />
            <mesh
              geometry={nodes.Cube019_1.geometry}
              material={materials['Material.018']}
            />
            <mesh
              geometry={nodes.Cube019_2.geometry}
              material={materials['Material.012']}
            />
            <mesh
              geometry={nodes.Cube019_3.geometry}
              material={materials['Material.030']}
            />
          </group>
          <group
            position={[-0.32, -4.88, 0.01]}
            rotation={[0, 0, 2.54]}
            scale={[0.13, 0.18, 0.07]}
          >
            <mesh
              geometry={nodes.Cube018_0.geometry}
              material={materials['Material.035']}
            />
          </group>
          <group position={[-3.15, -0.73, 0.88]} scale={0.42}>
            <mesh
              geometry={nodes.Cube016_0.geometry}
              material={materials['Material.023']}
            />
            <mesh
              geometry={nodes.Cube016_1.geometry}
              material={materials['Material.034']}
            />
            <mesh
              geometry={nodes.Cube016_2.geometry}
              material={materials['Material.039']}
            />
            <mesh
              geometry={nodes.Cube016_3.geometry}
              material={materials['Material.030']}
            />
          </group>
          <group
            position={[-3.24, -4.69, 0.08]}
            rotation={[0, 0, Math.PI / 4]}
            scale={0.91}
          >
            <mesh
              geometry={nodes.Cube015_0.geometry}
              material={materials['Material.034']}
            />
            <mesh
              geometry={nodes.Cube015_1.geometry}
              material={materials['Material.032']}
            />
            <mesh
              geometry={nodes.Cube015_2.geometry}
              material={materials['Material.031']}
            />
            <mesh
              geometry={nodes.Cube015_3.geometry}
              material={materials['Material.021']}
            />
            <mesh
              geometry={nodes.Cube015_4.geometry}
              material={materials['Material.022']}
            />
          </group>
          <group
            position={[-1.17, -4.64, 0.13]}
            rotation={[0, 0, 0.51]}
            scale={0.16}
          >
            <mesh
              geometry={nodes.Cube014_0.geometry}
              material={materials['Material.025']}
            />
          </group>
          <group
            position={[-1.17, -4.64, 0.01]}
            rotation={[0, 0, 0.51]}
            scale={0.16}
          >
            <mesh
              geometry={nodes.Cube013_0.geometry}
              material={materials['Material.025']}
            />
          </group>
          <group
            position={[-0.4, -4.53, 0.08]}
            rotation={[0, 0, 3.12]}
            scale={[0.13, 0.18, 0.07]}
          >
            <mesh
              geometry={nodes.Cube011_0.geometry}
              material={materials['Material.035']}
            />
          </group>
          <group
            position={[1.26, -0.84, 0.52]}
            rotation={[0, 0, -Math.PI]}
            scale={0.4}
          >
            <mesh
              geometry={nodes.Cube000_0.geometry}
              material={materials['Material.034']}
            />
            <mesh
              geometry={nodes.Cube000_1.geometry}
              material={materials['Material.032']}
            />
            <mesh
              geometry={nodes.Cube000_2.geometry}
              material={materials['Material.031']}
            />
            <mesh
              geometry={nodes.Cube000_3.geometry}
              material={materials['Material.030']}
            />
            <mesh
              geometry={nodes.Cube000_4.geometry}
              material={materials['Material.029']}
            />
            <mesh
              geometry={nodes.Cube000_5.geometry}
              material={materials['Material.021']}
            />
            <mesh
              geometry={nodes.Cube000_6.geometry}
              material={materials['Material.013']}
            />
            <mesh
              geometry={nodes.Cube000_7.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[1.44, -0.83, 1.81]}
            rotation={[-Math.PI / 2, 0, 0.03]}
            scale={0.16}
          >
            <mesh
              geometry={nodes.Cylinder000_0.geometry}
              material={materials['Material.011']}
            />
            <mesh
              geometry={nodes.Cylinder000_1.geometry}
              material={materials['Material.012']}
            />
            <mesh
              geometry={nodes.Cylinder000_2.geometry}
              material={materials['Material.000']}
            />
            <mesh
              geometry={nodes.Cylinder000_3.geometry}
              material={materials['Material.009']}
            />
          </group>
          <group
            position={[1.07, -0.83, 1.81]}
            rotation={[-Math.PI / 2, 0, -2.51]}
            scale={0.16}
          >
            <mesh
              geometry={nodes.Cylinder001_0.geometry}
              material={materials['Material.011']}
            />
            <mesh
              geometry={nodes.Cylinder001_1.geometry}
              material={materials['Material.012']}
            />
            <mesh
              geometry={nodes.Cylinder001_2.geometry}
              material={materials['Material.000']}
            />
            <mesh
              geometry={nodes.Cylinder001_3.geometry}
              material={materials['Material.009']}
            />
            <mesh
              geometry={nodes.Cylinder001_4.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[2.12, -0.34, 1.7]}
            rotation={[Math.PI, 0, 0.03]}
            scale={0.16}
          >
            <mesh
              geometry={nodes.Cylinder002_0.geometry}
              material={materials['Material.011']}
            />
            <mesh
              geometry={nodes.Cylinder002_1.geometry}
              material={materials['Material.012']}
            />
            <mesh
              geometry={nodes.Cylinder002_2.geometry}
              material={materials['Material.000']}
            />
            <mesh
              geometry={nodes.Cylinder002_3.geometry}
              material={materials['Material.009']}
            />
          </group>
          <group
            position={[2.31, -0.05, 2.39]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.66}
          >
            <mesh
              geometry={nodes.Cylinder_0.geometry}
              material={materials['Material.031']}
            />
            <mesh
              geometry={nodes.Cylinder_1.geometry}
              material={materials['Material.029']}
            />
            <mesh
              geometry={nodes.Cylinder_2.geometry}
              material={materials['Material.037']}
            />
          </group>
          <group
            position={[-2.53, -4.54, 0.12]}
            rotation={[0, 0, Math.PI / 4]}
            scale={0.4}
          >
            <mesh
              geometry={nodes.Cube_0.geometry}
              material={materials['Material.032']}
            />
            <mesh
              geometry={nodes.Cube_1.geometry}
              material={materials['Material.031']}
            />
            <mesh
              geometry={nodes.Cube_2.geometry}
              material={materials['Material.030']}
            />
            <mesh
              geometry={nodes.Cube_3.geometry}
              material={materials['Material.038']}
            />
            <mesh
              geometry={nodes.Cube_4.geometry}
              material={materials['Material.003']}
            />
            <mesh
              geometry={nodes.Cube_5.geometry}
              material={materials['Material.005']}
            />
          </group>
          <group
            position={[-1.66, -4.71, 0.26]}
            rotation={[0, 0, -1.86]}
            scale={0.06}
          >
            <mesh
              geometry={nodes.Cube001_0.geometry}
              material={materials['Material.031']}
            />
            <mesh
              geometry={nodes.Cube001_1.geometry}
              material={materials['Material.029']}
            />
            <mesh
              geometry={nodes.Cube001_2.geometry}
              material={materials['Material.014']}
            />
            <mesh
              geometry={nodes.Cube001_3.geometry}
              material={materials['Material.018']}
            />
          </group>
          <group
            position={[0.05, -2.64, 1.15]}
            rotation={[-0.05, 0, -1.02]}
            scale={0.08}
          >
            <mesh
              geometry={nodes.Cylinder007_0.geometry}
              material={materials['Material.027']}
            />
            <mesh
              geometry={nodes.Cylinder007_1.geometry}
              material={materials['Material.026']}
            />
          </group>
          <group
            position={[0.45, -2.8, 1.04]}
            rotation={[0, 0, 1.75]}
            scale={[0.13, 0.18, 0.07]}
          >
            <mesh
              geometry={nodes.Cube002_0.geometry}
              material={materials['Material.035']}
            />
          </group>
          <group position={[2.2, -0.47, 0.34]} scale={0.34}>
            <mesh
              geometry={nodes.Cube003_0.geometry}
              material={materials['Material.031']}
            />
            <mesh
              geometry={nodes.Cube003_1.geometry}
              material={materials['Material.030']}
            />
            <mesh
              geometry={nodes.Cube003_2.geometry}
              material={materials['Material.039']}
            />
          </group>
          <group
            position={[2.12, -0.34, 1.77]}
            rotation={[Math.PI, 0, 0.03]}
            scale={0.16}
          >
            <mesh
              geometry={nodes.Cylinder008_0.geometry}
              material={materials['Material.011']}
            />
            <mesh
              geometry={nodes.Cylinder008_1.geometry}
              material={materials['Material.012']}
            />
            <mesh
              geometry={nodes.Cylinder008_2.geometry}
              material={materials['Material.000']}
            />
            <mesh
              geometry={nodes.Cylinder008_3.geometry}
              material={materials['Material.009']}
            />
          </group>
          <group
            position={[2.32, -0.58, 1.7]}
            rotation={[Math.PI, 0, 0.95]}
            scale={0.16}
          >
            <mesh
              geometry={nodes.Cylinder009_0.geometry}
              material={materials['Material.011']}
            />
            <mesh
              geometry={nodes.Cylinder009_1.geometry}
              material={materials['Material.012']}
            />
            <mesh
              geometry={nodes.Cylinder009_2.geometry}
              material={materials['Material.000']}
            />
            <mesh
              geometry={nodes.Cylinder009_3.geometry}
              material={materials['Material.009']}
            />
          </group>
          <group
            position={[-3.46, -2.7, 0.25]}
            rotation={[0, 0, 1.03]}
            scale={0.38}
          >
            <mesh
              geometry={nodes.Cube004_0.geometry}
              material={materials['Material.034']}
            />
            <mesh
              geometry={nodes.Cube004_1.geometry}
              material={materials['Material.032']}
            />
            <mesh
              geometry={nodes.Cube004_2.geometry}
              material={materials['Material.031']}
            />
            <mesh
              geometry={nodes.Cube004_3.geometry}
              material={materials['Material.030']}
            />
            <mesh
              geometry={nodes.Cube004_4.geometry}
              material={materials['Material.017']}
            />
            <mesh
              geometry={nodes.Cube004_5.geometry}
              material={materials['Material.018']}
            />
            <mesh
              geometry={nodes.Cube004_6.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group position={[3.07, -0.1, 2.37]} scale={0.81}>
            <mesh
              geometry={nodes.Cube006_0.geometry}
              material={materials['Material.031']}
            />
            <mesh
              geometry={nodes.Cube006_1.geometry}
              material={materials['Material.030']}
            />
            <mesh
              geometry={nodes.Cube006_2.geometry}
              material={materials['Material.001']}
            />
            <mesh
              geometry={nodes.Cube006_3.geometry}
              material={materials['Material.002']}
            />
          </group>
          <group
            position={[-2.29, -0.56, 1.21]}
            rotation={[0, 0, -0.55]}
            scale={0.4}
          >
            <mesh
              geometry={nodes.Cube007_0.geometry}
              material={materials['Material.032']}
            />
            <mesh
              geometry={nodes.Cube007_1.geometry}
              material={materials['Material.031']}
            />
            <mesh
              geometry={nodes.Cube007_2.geometry}
              material={materials['Material.030']}
            />
            <mesh
              geometry={nodes.Cube007_3.geometry}
              material={materials['Material.038']}
            />
            <mesh
              geometry={nodes.Cube007_4.geometry}
              material={materials['Material.003']}
            />
            <mesh
              geometry={nodes.Cube007_5.geometry}
              material={materials['Material.005']}
            />
          </group>
          <group
            position={[-3.69, -0.49, 1.15]}
            rotation={[0, 0, 3.12]}
            scale={[0.13, 0.18, 0.07]}
          >
            <mesh
              geometry={nodes.Cube008_0.geometry}
              material={materials['Material.035']}
            />
          </group>
          <group
            position={[-3.85, -0.9, 1.09]}
            rotation={[0, 0, 2.17]}
            scale={[0.13, 0.18, 0.07]}
          >
            <mesh
              geometry={nodes.Cube009_0.geometry}
              material={materials['Material.035']}
            />
          </group>
          <group
            position={[-4.13, -0.48, 1.09]}
            rotation={[0, 0, 0.06]}
            scale={0.16}
          >
            <mesh
              geometry={nodes.Cube005_0.geometry}
              material={materials['Material.025']}
            />
          </group>
          <group
            position={[-4.13, -0.48, 1.2]}
            rotation={[0, 0, 0.06]}
            scale={0.16}
          >
            <mesh
              geometry={nodes.Cube010_0.geometry}
              material={materials['Material.025']}
            />
          </group>
          <group
            position={[-4.14, -0.48, 1.29]}
            rotation={[0, 0, -3]}
            scale={[0.13, 0.18, 0.07]}
          >
            <mesh
              geometry={nodes.Cube012_0.geometry}
              material={materials['Material.035']}
            />
          </group>
          <group
            position={[-1.79, -4.67, 0.26]}
            rotation={[0, 0, -2.05]}
            scale={0.06}
          >
            <mesh
              geometry={nodes.Cube017_0.geometry}
              material={materials['Material.031']}
            />
            <mesh
              geometry={nodes.Cube017_1.geometry}
              material={materials['Material.029']}
            />
            <mesh
              geometry={nodes.Cube017_2.geometry}
              material={materials['Material.014']}
            />
            <mesh
              geometry={nodes.Cube017_3.geometry}
              material={materials['Material.018']}
            />
          </group>
        </group>
      </group>
    </Suspense>
  );
}

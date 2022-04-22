import dynamic from 'next/dynamic';
// import Shader from '@/components/canvas/Shader/Shader'
// import Box from '@/components/canvas/Box'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const BoxComponent = dynamic(() => import('@/components/canvas/Box'), {
//   ssr: false,
// });
const ModelComponent = dynamic(() => import('@/components/canvas/Model'), {
  ssr: false,
});

// dom components goes here

// canvas components goes here
const R3F = () => {
  return (
    <>
      <ModelComponent />
    </>
  );
};

const Page = () => {
  return (
    <>
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  );
};

export default Page;

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  };
}

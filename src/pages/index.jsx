import dynamic from 'next/dynamic';
import supabase from '../helpers/supabaseClient';
import Model from '../components/canvas/office/Scene';

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

  if (!publicURL) {
    return {
      notFound: true,
    };
  }
}

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const BoxComponent = dynamic(() => import('@/components/canvas/Box'), {
//   ssr: false,
// });

export default function Page({ publicURL }) {
  return <Model publicURL={publicURL} />;
}

import { Canvas } from '@react-three/fiber';

function App({ Component, pageProps }) {
  return (
    <Canvas
      mode='concurrent'
      style={{
        position: 'absolute',
        top: 0,
      }}
    >
      <Component {...pageProps} />
    </Canvas>
  );
}

export default App;

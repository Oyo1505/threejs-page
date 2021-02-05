import './App.scss';
import React from 'react';
import { Canvas } from 'react-three-fiber';

function App() {
  return (
    <Canvas className="canvas" camera >
      <color attach="background" args={['#131314']} ></color>
      <mesh />
    </Canvas>
  );
}

export default App;

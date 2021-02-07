import './App.scss';
import React from "react";
import SpinningMesh from './container/SpinningMesh';
//import { Flex, Box } from '@react-three/flex';
import PlaneMesh from './container/planeMesh';
import { Canvas } from "react-three-fiber";
import { OrbitControls } from '@react-three/drei';
//import {Text} from 'troika-three-text'

function App() {
 
  return (
    <>
    <Canvas shadowMap className="canvas" colorManagement camera={{ position : [-5, 2 ,10], fov: 60}} >
      <ambientLight intensity={1}/>
      <pointLight position={[-10, 0, 20]} intensity={0.5}/>
      <pointLight position={[0, -10, 0]} intensity={1.5}/>
      <directionalLight
      castShadow
        position={[0, 10, 0]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <color attach="background" args={['#131314']} ></color>
     
    
      <group>
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0,-3,0]}>
          <planeBufferGeometry attach="geometry" args={[100, 100]}/>
          <shadowMaterial attach='material' opacity={0.3} />  
        </mesh>
        
        
         <PlaneMesh url="https://github.com/pmndrs/drei#center" />
    
     
       <SpinningMesh position={[-6, 0, 0]} args={[3,2,1]} />
  
      <SpinningMesh position={[5, 1, 3]} color='green'/>
        <SpinningMesh position={[4, 1, 0]} color='yellow'/>
      </group>
      
      <OrbitControls />
    </Canvas>
    </>
  );
}

export default App;

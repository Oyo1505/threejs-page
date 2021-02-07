
import React, { useRef } from 'react';
import * as THREE from 'three'
//import { Html } from '@react-three/drei';
//import { useLoader} from 'react-three-fiber'
//import img from '../img/sloth.jpg'
//import { useSpring,a} from 'react-spring/three';


function PlaneMesh ({url}){
    console.log(url)
    const mesh = useRef()
  
  
    return(
        <mesh 
         ref={mesh}
         
         >
        <planeBufferGeometry attach="geometry" args={[3, 3]} />
         <meshBasicMaterial attach="material" transparent   opacity={0.5}  side={THREE.DoubleSide} />          
       
        
        </mesh>
    )
}

export default PlaneMesh;
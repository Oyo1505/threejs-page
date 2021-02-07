
import React, { useRef, useState } from 'react';
import { useSpring,a} from 'react-spring/three';
import { useFrame } from 'react-three-fiber';

function SpinningMesh({position, args, color}) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
  
    // Set up state for the hovered and active state
    const [expand, setExpand] = useState(false)
    const [hovered, setHover] = useState(false)
    //const [active, setActive] = useState(false)
  
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
    
    const props = useSpring({
      scale: expand ? [1.4, 1.4, 1.4] : [1,1,1]
    });

    return (
      <a.mesh
        position={position}
        ref={mesh}
        castShadow
        scale={props.scale}
        onClick={() => setExpand(!expand)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}>
        <boxBufferGeometry attach='geometry' args={args} />
        <meshStandardMaterial attach='material' color={hovered ? color : 'red'} />
      </a.mesh>
    )
  }

  export default SpinningMesh;
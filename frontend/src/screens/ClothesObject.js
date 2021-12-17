import React, { Suspense, useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

import {Html, useGLTF, OrbitControls, ContactShadows} from '@react-three/drei'
// import {useSpring, a} from "react-spring/three"
import { useSpring, animated } from '@react-spring/three'

const Model = ({modelPath}) => {
  const gltf = useGLTF(modelPath, true)
  return <primitive object={gltf.scene} dispose={null} />
}

const HTMLContent = ({modelPath}) => {
  // const ref = useRef();
  // useFrame(() => (ref.current.rotation.y += 0.01))
  const [expand, setExpand] = useState(false);
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],

  })
  return (
    <group>
      <animated.mesh 
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      // ref={ref}
      position={[0,0,0]}>
      <Model modelPath={modelPath} />
      </animated.mesh>
    </group>


  )
}

const Lights = () => {
  return (
    <>
    <ambientLight intensity={0.3}/>
    <directionalLight position={[10, 10, 5]} intensity={1}/>
    <directionalLight position={[0, 10, 0]} intensity={1.5}/>
    <spotLight intensity={1} position={[1000, 0, 0]}/>
    </>
  )

}

export default function ClothesObject(){
  return (
    <>
    <NavBar />
    <Canvas style={{ height: '100vh'}}
      colorManagement
      camera={{position: [400, -100, 500], fov: 20}}>
      <Lights/>
      <Suspense fallback={null}>
       <HTMLContent modelPath = 'floralDress.gltf'/>
       <ContactShadows rotation-x={Math.PI/2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={2} far={1}/>
      </Suspense>
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}/>
    </Canvas>
    </>
  );
  
}
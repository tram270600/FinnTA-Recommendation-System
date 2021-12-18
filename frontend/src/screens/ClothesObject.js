import React, { Suspense, useRef } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Canvas, useFrame } from '@react-three/fiber'

import {Html, useGLTF} from '@react-three/drei'

const Model = ({modelPath}) => {
  const gltf = useGLTF(modelPath, true)
  return <primitive object={gltf.scene} dispose={null} />
}

const HTMLContent = ({modelPath}) => {
  // const ref = useRef();
  // useFrame(()=> (ref.current.rotation.x += 0.01));
  return (
    <mesh 
    // ref={ref} 
    position={[0,35,0]}>
    <Model modelPath={modelPath} />
    </mesh>

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
    <Canvas
      colorManagement
      camera={{position: [0, 0, 120], fov: 70}}>
      <Lights/>
      <Suspense fallback={null}>
       <HTMLContent modelPath = 'floralDress.gltf'/>
      </Suspense>
    </Canvas>
    <Footer />
    </>
  );
  
}
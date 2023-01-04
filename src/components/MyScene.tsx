import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { Euler } from "three";
import { Model } from "./Model";

export default function MyScene() {
  const zoom: number = window.innerWidth < 640 ? 6 : 4;

  const [modelRotation, setModelRotation] = useState<Euler>(new Euler(0, 0, 0));

  useFrame(() => {
    const newRotation = modelRotation.clone();
    newRotation.y += 0.001;
    setModelRotation(newRotation);
  });
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[0, 0, 0]} intensity={0.5} />
      <pointLight position={[5, 0, 0]} intensity={0.25} />
      <pointLight position={[0, 5, 0]} intensity={0.25} />
      <pointLight position={[0, 0, 5]} intensity={0.25} />
      <pointLight position={[-5, 0, 0]} intensity={0.25} />
      <pointLight position={[0, -5, 0]} intensity={0.25} />
      <pointLight position={[0, 0, -5]} intensity={0.25} />

      <PerspectiveCamera makeDefault position={[0, 0, zoom]} />
      <OrbitControls enablePan={false} rotateSpeed={0.3} />

      <Model rotation={modelRotation} />
    </>
  );
}

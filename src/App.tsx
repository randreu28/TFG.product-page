import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./components/Model";

export default function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Canvas>
          <ambientLight intensity={1} />
          <pointLight position={[0, 0, 0]} intensity={0.5} />

          <pointLight position={[5, 0, 0]} intensity={0.25} />
          <pointLight position={[0, 5, 0]} intensity={0.25} />
          <pointLight position={[0, 0, 5]} intensity={0.25} />
          <pointLight position={[-5, 0, 0]} intensity={0.25} />
          <pointLight position={[0, -5, 0]} intensity={0.25} />
          <pointLight position={[0, 0, -5]} intensity={0.25} />

          <OrbitControls />
          <Model />
        </Canvas>
      </div>
    </>
  );
}

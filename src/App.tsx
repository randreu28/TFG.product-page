import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./components/Model";

export default function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Canvas>
          <pointLight position={[0, 20, 10]} intensity={1.5} />
          <OrbitControls />
          <Model />
        </Canvas>
      </div>
    </>
  );
}

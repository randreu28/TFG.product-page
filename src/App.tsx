import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Headphones } from "./components/Headphones";

export default function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Canvas>
          <pointLight position={[0, 20, 10]} intensity={1.5} />
          <OrbitControls />
          <Headphones />
        </Canvas>
      </div>
    </>
  );
}

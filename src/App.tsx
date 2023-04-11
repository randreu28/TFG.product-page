import { Canvas } from "@react-three/fiber";
import toast, { Toaster } from "react-hot-toast";
import ColorPicker from "./components/ColorPicker";
import MyScene from "./components/MyScene";
import Navbar from "./components/Navbar";
import VariantPicker from "./components/VariantPicker";
import { useSpecStore } from "./specStore";
import Signature from "./components/Signature";

export default function App() {
  const specs = useSpecStore();
  return (
    <>
      <Toaster position="bottom-center" />
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[100rem] m-auto">
        <div className="h-[77vh] m-5 col-span-2 bg-gradient-to-br from-teal-500/10 to-pink-500/10 rounded-xl backdrop-filter backdrop-blur-md">
          {
            <Canvas className="rounded-xl">
              <MyScene />
            </Canvas>
          }
        </div>
        <div className="p-5 bg-gradient-to-br from-teal-500/10 to-pink-500/10 backdrop-filter backdrop-blur-md rounded-xl m-5 flex flex-col justify-between gap-10">
          <div className="space-y-10">
            <div className="space-y-2">
              <h2 className="font-bold text-3xl">Cool headphones</h2>
              <div className="flex space-x-2">
                <p className="text-lg">$353.95</p>
                <p className="bg-gray-700 rounded-full px-2 my-auto">USD</p>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-xl">Color</h3>
              <div className="flex space-x-3 justify-center sm:justify-start pt-5">
                <ColorPicker />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-xl">Variant</h3>
              <div className="flex flex-col gap-5 w-fit text-center sm:flex-row mx-auto sm:mx-0 pt-5">
                <VariantPicker />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-xl">Description</h3>
              <p className="leading-loose text-gray-300 line-clamp-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur esse quam cupiditate commodi dicta soluta aliquid.
                libero velit quisquam? Eos cum, accusantium quam consectetur
                officiis suscipit aut aperiam voluptatibus quos.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              toast.success("Item added to your cart", {
                style: {
                  background: "transparent",
                  borderWidth: 1,
                  borderColor: "rgb(20 184 166)",
                  color: "#fff",
                },
                iconTheme: { primary: "rgb(20 184 166)", secondary: "#000000" },
              });
              console.log(specs);
            }}
            className="w-full rounded-xl text-center py-5 border-2 border-teal-500/40 hover:border-pink-500/40 duration-300 transition-colors uppercase font-bold text-teal-500 hover:text-pink-500"
          >
            Add to cart
          </button>
        </div>
      </div>
      <Signature />
    </>
  );
}

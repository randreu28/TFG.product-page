import { useSpecStore } from "../specStore";

export default function VariantPicker() {
  const specs = useSpecStore();
  return (
    <>
      <abbr
        onClick={() => {
          specs.setVariant("no RGB");
        }}
        title="No RGB leds"
        className={`rounded-full px-3 py-1 my-auto no-underline line-clamp-1 hover:cursor-pointer transition-colors duration-300 border ${
          specs.variant == "no RGB" ? "border-teal-500" : "border-pink-500/25"
        }`}
      >
        no RGB
      </abbr>
      <abbr
        onClick={() => {
          specs.setVariant("RGB");
        }}
        title="With red lights only"
        className={`rounded-full px-3 py-1 my-auto no-underline line-clamp-1 hover:cursor-pointer transition-colors duration-300 border ${
          specs.variant == "RGB" ? "border-teal-500" : " border-pink-500/25"
        }`}
      >
        RGB
      </abbr>
      <abbr
        onClick={() => {
          specs.setVariant("RGB pro");
        }}
        title="Up to 16k different colors"
        className={`rounded-full px-3 py-1 my-auto no-underline line-clamp-1 hover:cursor-pointer transition-colors duration-300 border ${
          specs.variant == "RGB pro" ? "border-teal-500" : "border-pink-500/25"
        }`}
      >
        RGB pro
      </abbr>
    </>
  );
}

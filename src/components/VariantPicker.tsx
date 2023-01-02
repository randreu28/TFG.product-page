import { Specs } from "../App";

type Props = {
  specs: Specs;
  setSpecs: React.Dispatch<React.SetStateAction<Specs>>;
};

export default function VariantPicker({ specs, setSpecs }: Props) {
  function changeVariant(variant: typeof specs.variant) {
    const newVariant = { ...specs };
    newVariant.variant = variant;

    setSpecs(newVariant);
  }
  return (
    <>
      <abbr
        onClick={() => {
          changeVariant("wired");
        }}
        title="Chargable via USB-C"
        className={`rounded-full px-3 py-1 my-auto no-underline line-clamp-1 hover:cursor-pointer transition-colors duration-300 border ${
          specs.variant == "wired" ? "border-teal-500" : "border-pink-500/25"
        }`}
      >
        Wired
      </abbr>
      <abbr
        onClick={() => {
          changeVariant("wireless");
        }}
        title="Up to 30 battery hours"
        className={`rounded-full px-3 py-1 my-auto no-underline line-clamp-1 hover:cursor-pointer transition-colors duration-300 border ${
          specs.variant == "wireless"
            ? "border-teal-500"
            : " border-pink-500/25"
        }`}
      >
        Wireless
      </abbr>
      <abbr
        onClick={() => {
          changeVariant("wireless pro");
        }}
        title="Up to 100 battery hours"
        className={`rounded-full px-3 py-1 my-auto no-underline line-clamp-1 hover:cursor-pointer transition-colors duration-300 border ${
          specs.variant == "wireless pro"
            ? "border-teal-500"
            : "border-pink-500/25"
        }`}
      >
        Wireless pro
      </abbr>
    </>
  );
}

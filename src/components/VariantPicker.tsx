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
        className={`rounded-full px-3 py-1 my-auto no-underline line-clamp-1 hover:cursor-pointer ${
          specs.variant == "wired" ? "bg-gray-900" : "bg-gray-700"
        }`}
      >
        Wired
      </abbr>
      <abbr
        onClick={() => {
          changeVariant("wireless");
        }}
        title="Up to 30 battery hours"
        className={`rounded-full px-3 py-1 my-auto no-underline line-clamp-1 hover:cursor-pointer ${
          specs.variant == "wireless" ? "bg-gray-900" : "bg-gray-700"
        }`}
      >
        Wireless
      </abbr>
      <abbr
        onClick={() => {
          changeVariant("wireless pro");
        }}
        title="Up to 100 battery hours"
        className={`rounded-full px-3 py-1 my-auto no-underline line-clamp-1 hover:cursor-pointer ${
          specs.variant == "wireless pro" ? "bg-gray-900" : "bg-gray-700"
        }`}
      >
        Wireless pro
      </abbr>
    </>
  );
}

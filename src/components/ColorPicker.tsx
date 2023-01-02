import { Specs } from "../App";

type Props = {
  specs: Specs;
  setSpecs: React.Dispatch<React.SetStateAction<Specs>>;
};

export default function ColorPicker({ specs, setSpecs }: Props) {
  function changeColor(color: typeof specs.color) {
    const newColor = { ...specs };
    newColor.color = color;

    setSpecs(newColor);
  }

  return (
    <>
      <button
        onClick={() => changeColor("black")}
        className={`bg-black rounded w-10 h-10 transition-colors duration-300 ${
          specs.color == "black"
            ? "border-2 border-teal-600"
            : "border border-pink-600/30"
        }`}
      />
      <button
        onClick={() => changeColor("white")}
        className={`bg-white rounded w-10 h-10 transition-colors duration-300 ${
          specs.color == "white"
            ? "border-2 border-teal-600"
            : "border border-pink-600/30"
        }`}
      />
      <button
        onClick={() => changeColor("blue")}
        className={`bg-blue-900 rounded w-10 h-10 transition-colors duration-300 ${
          specs.color == "blue"
            ? "border-2 border-teal-600"
            : "border border-pink-600/30"
        }`}
      />
    </>
  );
}

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
        className={`bg-black rounded-full w-10 h-10 border-8 ${
          specs.color == "black" ? "border-gray-900" : "border-gray-700"
        }`}
      />
      <button
        onClick={() => changeColor("white")}
        className={`bg-white rounded-full w-10 h-10 border-8 ${
          specs.color == "white" ? "border-gray-900" : "border-gray-700"
        }`}
      />
      <button
        onClick={() => changeColor("blue")}
        className={`bg-blue-900 rounded-full w-10 h-10 border-8 ${
          specs.color == "blue" ? "border-gray-900" : "border-gray-700"
        }`}
      />
    </>
  );
}

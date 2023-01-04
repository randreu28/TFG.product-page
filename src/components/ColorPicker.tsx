import { useSpecStore } from "../specStore";

export default function ColorPicker() {
  const specs = useSpecStore();
  return (
    <>
      <button
        onClick={() => specs.setColor("black")}
        className={`bg-black rounded w-10 h-10 transition-colors duration-300 ${
          specs.color == "black"
            ? "border-2 border-teal-600"
            : "border border-pink-600/30"
        }`}
      />
      <button
        onClick={() => specs.setColor("white")}
        className={`bg-white rounded w-10 h-10 transition-colors duration-300 ${
          specs.color == "white"
            ? "border-2 border-teal-600"
            : "border border-pink-600/30"
        }`}
      />
      <button
        onClick={() => specs.setColor("blue")}
        className={`bg-blue-900 rounded w-10 h-10 transition-colors duration-300 ${
          specs.color == "blue"
            ? "border-2 border-teal-600"
            : "border border-pink-600/30"
        }`}
      />
    </>
  );
}

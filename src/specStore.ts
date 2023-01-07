import create from "zustand";

export type Specs = {
  color: "black" | "white" | "blue";
  variant: "no RGB" | "RGB" | "RGB pro";
  setColor: (newColor: Specs["color"]) => void;
  setVariant: (newVariant: Specs["variant"]) => void;
};

export const useSpecStore = create<Specs>((set) => ({
  color: "black",
  variant: "RGB",
  setColor: (newColor) => set(() => ({ color: newColor })),
  setVariant: (newVariant) => set(() => ({ variant: newVariant })),
}));

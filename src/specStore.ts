import create from "zustand";

type Color = "black" | "white" | "blue";
type Variant = "wired" | "wireless" | "wireless pro";

export type Specs = {
  color: Color;
  variant: Variant;
  setColor: (newColor: Color) => void;
  setVariant: (newVariant: Variant) => void;
};

export const useSpecStore = create<Specs>((set) => ({
  color: "black",
  variant: "wired",
  setColor: (newColor) => set(() => ({ color: newColor })),
  setVariant: (newVariant) => set(() => ({ variant: newVariant })),
}));

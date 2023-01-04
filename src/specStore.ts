import create from "zustand";

export type Specs = {
  color: "black" | "white" | "blue";
  variant: "wired" | "wireless" | "wireless pro";
  setColor: (newColor: Specs["color"]) => void;
  setVariant: (newVariant: Specs["variant"]) => void;
};

export const useSpecStore = create<Specs>((set) => ({
  color: "black",
  variant: "wired",
  setColor: (newColor) => set(() => ({ color: newColor })),
  setVariant: (newVariant) => set(() => ({ variant: newVariant })),
}));

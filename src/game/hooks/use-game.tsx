import create from "zustand";

type UseGame = {
  speed: number;
};

export const useGame = create<UseGame>(() => {
  return {
    speed: 0.01,
  };
});

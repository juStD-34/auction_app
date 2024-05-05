import { create } from "zustand";

export const useLoggedIn = create((set) => ({
  isLoggedIn: true,
  setLoggedIn: (value) => set({ isLoggedIn: value }),
}));

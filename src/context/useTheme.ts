import { useContext } from "react";
import { ThemeContext } from "./ThemeStore";

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("ThemeProvider requerido");
  return ctx;
}

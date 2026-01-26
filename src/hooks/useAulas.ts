import { useContext } from "react";
import { AulasContext } from "../contexts/AgendaContext";

export function useAulas() {
  const context = useContext(AulasContext);
  if (!context) {
    throw new Error("useAulas deve ser usado dentro de AulasProvider");
  }
  return context;
}

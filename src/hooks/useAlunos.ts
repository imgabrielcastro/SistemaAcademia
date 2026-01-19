import { useContext } from "react";
import { AlunosContext } from "../contexts/AlunosContext";

export function useAlunos() {
  const context = useContext(AlunosContext);

  if (!context) {
    throw new Error("useAlunos deve ser usado dentro de AlunosProvider");
  }

  return context;
}

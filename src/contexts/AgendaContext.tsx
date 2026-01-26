import { createContext, useEffect, useState } from "react";
import { Aula } from "../types/Aula";
import {
  getAulasNoStorage,
  salvarAulasNoStorage,
} from "../storage/agendaStorage";
import { aulasMock } from "../data/HorariosMock";

interface AulasContextData {
  aulas: Aula[];
  adicionarAula: (aula: Aula) => void;
  atualizarAula: (id: string, aula: Aula) => void;
}

export const AulasContext = createContext<AulasContextData | null>(null);

export default function AulasProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [aulas, setAulas] = useState<Aula[]>([]);

  useEffect(() => {
    const aulasStorage = getAulasNoStorage();

    if (aulasStorage.length === 0) {
      setAulas(aulasMock);
      salvarAulasNoStorage(aulasMock);
    } else {
      setAulas(aulasStorage);
    }
  }, []);

  useEffect(() => {
    salvarAulasNoStorage(aulas);
  }, [aulas]);

  function adicionarAula(aula: Aula) {
    setAulas((prev) => [...prev, aula]);
  }

  function atualizarAula(id: string, aulaAtualizada: Aula) {
    setAulas((prev) =>
      prev.map((aula) => (aula.id === id ? aulaAtualizada : aula)),
    );
  }

  return (
    <AulasContext.Provider value={{ aulas, adicionarAula, atualizarAula }}>
      {children}
    </AulasContext.Provider>
  );
}

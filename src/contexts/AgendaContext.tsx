import { createContext, useEffect, useState } from "react";
import { Aula } from "../types/Aula";
import { aulasMock } from "../data/HorariosMock";
import {
  getAulasNoStorage,
  salvarAulasNoStorage,
} from "../storage/agendaStorage";

type AulasContextData = {
  aulas: Aula[];
  adicionarAula: (aula: Aula) => void;
  atualizarAula: (id: string, dados: Partial<Aula>) => void;
};

export const AulasContext = createContext<AulasContextData | null>(null);

export default function AulasProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [aulas, setAulas] = useState<Aula[]>([]);

  useEffect(() => {
    const aulasStorage = getAulasNoStorage();
    if (aulasStorage.length > 0) {
      setAulas(aulasStorage);
    } else {
      setAulas([...aulasMock]);
    }
  }, []);

  function adicionarAula(aula: Aula) {
    setAulas((prev) => {
      const novos = [...prev, aula];
      salvarAulasNoStorage(novos);
      return novos;
    });
  }

  function atualizarAula(id: string, dados: Partial<Aula>) {
    setAulas((prev) => {
      const atualizados = prev.map((aula) =>
        aula.id === id ? { ...aula, ...dados } : aula
      );
      salvarAulasNoStorage(atualizados);
      return atualizados;
    });
  }

  return (
    <AulasContext.Provider
      value={{ aulas, adicionarAula, atualizarAula }}
    >
      {children}
    </AulasContext.Provider>
  );
}

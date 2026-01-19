import { createContext, useEffect, useState } from "react";
import { Aluno } from "../types/Aluno";
import { defaultAlunos } from "../data/AlunosMock";
import {
  getAlunosNoStorage,
  salvarAlunoNoStorage,
} from "../storage/alunoStorage";

type AlunosContextData = {
  alunos: Aluno[];
  adicionarAluno: (aluno: Aluno) => void;
};

export const AlunosContext = createContext<AlunosContextData | null>(null);

export default function AlunosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [alunos, setAlunos] = useState<Aluno[]>([]);

  useEffect(() => {
    const alunosStorage = getAlunosNoStorage();
    setAlunos([...defaultAlunos, ...alunosStorage]);
  }, []);

  function adicionarAluno(aluno: Aluno) {
    salvarAlunoNoStorage(aluno);
    setAlunos((prev) => [...prev, aluno]);
  }

  return (
    <AlunosContext.Provider value={{ alunos, adicionarAluno }}>
      {children}
    </AlunosContext.Provider>
  );
}

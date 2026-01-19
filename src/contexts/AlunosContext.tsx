import { createContext, useEffect, useState } from "react";
import { Aluno } from "../types/Aluno";
import { defaultAlunos } from "../data/AlunosMock";
import {
  getAlunosNoStorage,
  salvarAlunosNoStorage,
} from "../storage/alunoStorage";

//Aqui neste local, precisei um pouco de auxílio de uma IA para conseguir fazer o CRUD corretamente, pedindo sugestão da manipulação dos dados no localStorage e 
//em passar as props corretamente para os componentes filhos.

type AlunosContextData = {
  alunos: Aluno[];
  adicionarAluno: (aluno: Aluno) => void;
  atualizarAluno: (id: string, dados: Partial<Aluno>) => void;
  removerAluno: (id: string) => void;
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
    setAlunos((prev) => {
      const novos = [...prev, aluno];
      salvarAlunosNoStorage(novos);
      return novos;
    });
  }

  function atualizarAluno(id: string, dados: Partial<Aluno>) {
    setAlunos((prev) => {
      const atualizados = prev.map((aluno) =>
        aluno.id === id ? { ...aluno, ...dados } : aluno
      );
      salvarAlunosNoStorage(atualizados);
      return atualizados;
    });
  }

  function removerAluno(id: string) {
    setAlunos((prev) => {
      const filtrados = prev.filter((aluno) => aluno.id !== id);
      salvarAlunosNoStorage(filtrados);
      return filtrados;
    });
  }

  return (
    <AlunosContext.Provider
      value={{ alunos, adicionarAluno, atualizarAluno, removerAluno }}
    >
      {children}
    </AlunosContext.Provider>
  );
}

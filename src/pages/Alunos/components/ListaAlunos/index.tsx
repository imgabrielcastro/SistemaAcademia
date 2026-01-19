import { Aluno } from "../../../../types/Aluno";
import AlunoCard from "../AlunoCard";
import { useEffect } from "react";
import { useAlunos } from "../../../../hooks/useAlunos";

export function ListaAlunos() {
  const { alunos } = useAlunos();

  useEffect(() => {
    console.log("ListaAlunos");
  }, []);

  return (
    <div>
      {alunos.map((aluno: Aluno) => (
        <AlunoCard key={aluno.id} aluno={aluno} />
      ))}
    </div>
  );
}

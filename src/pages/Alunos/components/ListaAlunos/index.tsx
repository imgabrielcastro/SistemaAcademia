import AlunoCard from "../AlunoCard";
import { useAlunos } from "../../../../hooks/useAlunos";
import { useState } from "react";
import BarraPesquisa from "../BarraPesquisa";

export function ListaAlunos() {
  const { alunos } = useAlunos();
  const [searchAluno, setSearchAluno] = useState<string>("");

  const alunosFiltrados = searchAluno
    ? alunos.filter(
        (aluno) =>
          aluno.nome.toLowerCase().includes(searchAluno.toLowerCase()) ||
          (aluno.cpf && aluno.cpf.includes(searchAluno)) ,
      )
    : alunos;

  return (
    <div>
      <BarraPesquisa
        searchAluno={searchAluno}
        onSearchChange={setSearchAluno}
      />
      {alunosFiltrados.map((aluno) => (
        <AlunoCard key={aluno.id} aluno={aluno} />
      ))}
    </div>
  );
}

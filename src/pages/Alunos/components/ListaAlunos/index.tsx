import AlunoCard from "../AlunoCard";
import { useAlunos } from "../../../../hooks/useAlunos";
import { useState } from "react";
import BarraPesquisa from "../BarraPesquisa";
import { Aluno } from "../../../../types/Aluno";

type ListaAlunosProps = {
  onSelectAluno: (aluno: Aluno) => void;
};

export function ListaAlunos({ onSelectAluno }: ListaAlunosProps) {
  const { alunos } = useAlunos();
  const [searchAluno, setSearchAluno] = useState("");

  const alunosFiltrados = searchAluno
    ? alunos.filter(
        (aluno) =>
          aluno.nome.toLowerCase().includes(searchAluno.toLowerCase()) ||
          (aluno.cpf && aluno.cpf.includes(searchAluno))
      )
    : alunos;

  return (
    <div>
      <BarraPesquisa
        searchAluno={searchAluno}
        onSearchChange={setSearchAluno}
      />

      {alunosFiltrados.map((aluno) => (
        <AlunoCard
          key={aluno.id}
          aluno={aluno}
          onSelected={onSelectAluno}
        />
      ))}
    </div>
  );
}

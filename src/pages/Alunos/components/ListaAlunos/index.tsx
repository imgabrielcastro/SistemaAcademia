import AlunoCard from "../AlunoCard";
import { useAlunos } from "../../../../hooks/useAlunos";
import { useState, useEffect } from "react";
import BarraPesquisa from "../BarraPesquisa";
import { Aluno } from "../../../../types/Aluno";

type ListaAlunosProps = {
  onSelectAluno: (aluno: Aluno) => void;
  onQtdeAlunosChange?: (qtde: number) => void;
};

export function ListaAlunos({
  onSelectAluno,
  onQtdeAlunosChange,
}: ListaAlunosProps) {
  const { alunos } = useAlunos();
  const [searchAluno, setSearchAluno] = useState("");

  const alunosFiltrados = searchAluno
    ? alunos.filter(
        (aluno) =>
          aluno.nome.toLowerCase().includes(searchAluno.toLowerCase()) ||
          (aluno.cpf && aluno.cpf.includes(searchAluno)),
      )
    : alunos;

  useEffect(() => {
    if (onQtdeAlunosChange) {
      onQtdeAlunosChange(alunosFiltrados.length);
    }
  }, [alunosFiltrados, onQtdeAlunosChange]);

  return (
    <div>
      <BarraPesquisa
        searchAluno={searchAluno}
        onSearchChange={setSearchAluno}
      />

      {alunosFiltrados.map((aluno) => (
        <AlunoCard key={aluno.id} aluno={aluno} onSelected={onSelectAluno} />
      ))}
    </div>
  );
}

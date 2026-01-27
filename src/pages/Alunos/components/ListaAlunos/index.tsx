import AlunoCard from "../AlunoCard";
import { useAlunos } from "../../../../hooks/useAlunos";
import { useState, useEffect } from "react";
import BarraPesquisa from "../BarraPesquisa";
import { Aluno } from "../../../../types/Aluno";
import { Virtuoso } from "react-virtuoso";

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
    onQtdeAlunosChange?.(alunosFiltrados.length);
  }, [alunosFiltrados, onQtdeAlunosChange]);

  return (
    <div>
      <BarraPesquisa
        searchAluno={searchAluno}
        onSearchChange={setSearchAluno}
      />

      {alunosFiltrados.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          Nenhum aluno encontrado
        </div>
      )}

      {/*Virtuoso para exibir somente o que está na tela sendo renderizado pelo scroll.*/}
      <Virtuoso
        useWindowScroll
        data={alunosFiltrados}
        increaseViewportBy={{ bottom: 500, top: 10 }}
        itemContent={(_, aluno) => (
          <AlunoCard key={aluno.id} aluno={aluno} onSelected={onSelectAluno} />
        )}
      />
    </div>
  );
}

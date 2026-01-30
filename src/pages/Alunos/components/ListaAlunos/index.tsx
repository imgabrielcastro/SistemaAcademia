import AlunoCard from "../AlunoCard";
import { useAlunos } from "../../../../hooks/useAlunos";
import { useState, useEffect } from "react";
import BarraPesquisa from "../BarraPesquisa";
import { Aluno } from "../../../../types/Aluno";
import { Virtuoso } from "react-virtuoso";
import Skeleton from "@mui/material/Skeleton";

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
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    setLoading(true);
    const timeoutId = window.setTimeout(() => setLoading(false), 400);
    return () => window.clearTimeout(timeoutId);
  }, [alunosFiltrados, alunos]);

  if (loading) {
    return (
      <>
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton
            key={index}
            variant="rounded"
            height={90}
            sx={{ width: "100%", borderRadius: 2, marginBottom: 2 }}
          />
        ))}
      </>
    );
  }

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

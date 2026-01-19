import { defaultAlunos } from "../../../../data/ClientesMock";
import { Aluno } from "../../../../types/Aluno";
import AlunoCard from "../AlunoCard";

export function ListaAlunos() {
  return (
    <div>
      {defaultAlunos.map((aluno: Aluno) => (
        <AlunoCard key={aluno.id} aluno={aluno} />
      ))}
    </div>
  );
}
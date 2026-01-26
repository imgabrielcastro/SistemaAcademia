import type { Aluno } from "./Aluno";

export type SituacaoAula =
  | "ABERTA"
  | "EM ANDAMENTO"
  | "FINALIZADA"
  | "CANCELADA";

export interface Aula {
  id: string;
  titulo: string;
  modalidade: string;
  dataHoraInicio: string;
  situacao: SituacaoAula;
  qntVagas: number;
  permiteAgendamentoPos: boolean;
  alunos: Aluno[];
}

export const situacaoAula: SituacaoAula[] = [
  "ABERTA",
  "EM ANDAMENTO",
  "FINALIZADA",
  "CANCELADA",
];

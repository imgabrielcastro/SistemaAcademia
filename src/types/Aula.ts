import { Aluno } from "./Aluno";

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
  qntParticipantes: number;
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

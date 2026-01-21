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
}

export const situacaoAula: SituacaoAula[] = [
  "ABERTA",
  "EM ANDAMENTO",
  "FINALIZADA",
  "CANCELADA",
];

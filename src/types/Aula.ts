export type SituacaoAula =
  | "ABERTA"
  | "EM_ANDAMENTO"
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

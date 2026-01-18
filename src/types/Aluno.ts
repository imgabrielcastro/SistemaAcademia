export type Aluno = {
  id: string;
  nome: string;
  cpf: string;
  tipoContrato: "Mensal" | "Trimestral" | "Semestral" | "Anual";
};

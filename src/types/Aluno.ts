export type TipoContrato = "Mensal" | "Trimestral" | "Anual";

export type Aluno = {
  id: string;
  nome: string;
  cpf?: string;
  tipoContrato: TipoContrato;
  dataNascimento?: string;
  cidade?: string;
  bairro?: string;
  endereco?: string;
};

export const tiposContrato: TipoContrato[] = ["Mensal", "Trimestral", "Anual"];

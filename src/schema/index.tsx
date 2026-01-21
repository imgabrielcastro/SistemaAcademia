import * as yup from "yup";

export const cadastroAlunoSchema = yup.object({
  nome: yup.string().required("Nome é obrigatório"),

  cpf: yup.string().required("CPF é obrigatório"),

  dataNascimento: yup
    .date()
    .required("Data obrigatória")
    .max(new Date(), "Data de nascimento não pode ser no futuro")
    .transform((value, originalValue) => {
      return originalValue === "" ? undefined : value;
    }),

  tipoContrato: yup
    .mixed<"Mensal" | "Trimestral" | "Anual">()
    .oneOf(["Mensal", "Trimestral", "Anual"])
    .required("Contrato obrigatório")
    .transform((value, originalValue) => {
      return originalValue === "" ? undefined : value;
    }),

  cidade: yup.string(),
  bairro: yup.string(),
  endereco: yup.string(),
});

export const cadastroAgendaSchema = yup.object({
  descricao: yup.string().required("Descrição é obrigatória"),
  modalidade: yup.string().required("Modalidade é obrigatória"),
  dataInicio: yup
    .date()
    .required("Data de início é obrigatória")
    .transform((value, originalValue) => {
      return originalValue === "" ? undefined : value;
    }),
  capacidade: yup
    .number()
    .required("Capacidade é obrigatória")
    .transform((value, originalValue) => {
      return originalValue === "" ? undefined : value;
    }),

  situacao: yup
    .mixed<"ABERTA" | "EM ANDAMENTO" | "ENCERRADA">()
    .oneOf(["ABERTA", "EM ANDAMENTO", "ENCERRADA"])
    .required("Situação é obrigatória")
    .transform((value, originalValue) => {
      return originalValue === "" ? undefined : value;
    }),
});

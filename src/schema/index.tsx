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
  titulo: yup.string().required("Título é obrigatório"),
  modalidade: yup.string().required("Modalidade é obrigatória"),
  dataHoraInicio: yup
    .date()
    .min(new Date(), "Data de início não pode ser no passado")
    .required("Data de início é obrigatória")
    .transform((value, originalValue) => {
      return originalValue === "" ? undefined : value;
    }),
  qntVagas: yup
    .number()
    .required("Quantidade de vagas é obrigatória")
    .min(1, "Deve haver pelo menos 1 vaga")
    .transform((value, originalValue) => {
      return originalValue === "" ? undefined : value;
    }),

  situacao: yup
    .mixed<"ABERTA" | "EM ANDAMENTO" | "FINALIZADA" | "CANCELADA">()
    .oneOf(["ABERTA", "EM ANDAMENTO", "FINALIZADA", "CANCELADA"])
    .required("Situação é obrigatória")
    .transform((value, originalValue) => {
      return originalValue === "" ? undefined : value;
    }),
});
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

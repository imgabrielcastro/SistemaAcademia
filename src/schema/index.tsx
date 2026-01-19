import * as yup from "yup";

export const cadastroAlunoSchema = yup.object({
  nome: yup.string().required("Nome é obrigatório"),

  cpf: yup
    .string()
    .required("CPF é obrigatório")
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),

  dataNascimento: yup
    .date()
    .required("Data obrigatória")
    .max(new Date(), "Data de nascimento não pode ser no futuro"),

  tipoContrato: yup
    .mixed<"Mensal" | "Trimestral" | "Anual">()
    .oneOf(["Mensal", "Trimestral", "Anual"])
    .required("Contrato obrigatório"),

  cidade: yup.string(),
  bairro: yup.string(),
  endereco: yup.string(),
});

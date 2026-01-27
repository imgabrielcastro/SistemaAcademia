import * as yup from "yup";

export const cadastroAlunoSchema = yup.object({
  nome: yup.string().required("Nome é obrigatório"),

  cpf: yup.string().required("CPF é obrigatório"),

  dataNascimento: yup
    .string()
    .required("Data obrigatória")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Data inválida")
    .test(
      "not-future",
      "Data de nascimento não pode ser no futuro",
      (value) => {
        if (!value) return true;
        const date = new Date(`${value}T00:00:00`);
        if (Number.isNaN(date.getTime())) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date.getTime() <= today.getTime();
      },
    )
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
    .string()
    .required("Data de início é obrigatória")
    .matches(
      //validação na data local
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?$/,
      "Data inválida",
    )
    .test("not-past", "Data de início não pode ser no passado", (value) => {
      if (!value) return true;
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) return false;
      return date.getTime() >= Date.now();
    })
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

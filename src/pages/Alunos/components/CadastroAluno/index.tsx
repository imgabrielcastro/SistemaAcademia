import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
  Autocomplete,
} from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { cadastroAlunoSchema } from "../../../../schema";
import { PatternFormat } from "react-number-format";
import { useAlunos } from "../../../../hooks/useAlunos";
import { tiposContrato, Aluno } from "../../../../types/Aluno";
import { useEffect } from "react";

function toYyyyMmDd(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function verificarData(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function ajusteDataInput(value: unknown): string | undefined {
  if (value == null || value === "") return undefined;

  if (value instanceof Date) return toYyyyMmDd(value);

  const raw = typeof value === "string" ? value : String(value);
  if (verificarData(raw)) return raw;

  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return toYyyyMmDd(parsed);
}

type CadastroAlunoProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  aluno?: Aluno | null;
};

export default function CadastroAluno({
  open,
  setOpen,
  aluno,
}: CadastroAlunoProps) {
  const contratos = tiposContrato;
  const { adicionarAluno, atualizarAluno, removerAluno } = useAlunos();

  type FormData = yup.InferType<typeof cadastroAlunoSchema>;

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(cadastroAlunoSchema) as any,
  });

  useEffect(() => {
    if (aluno) {
      reset({
        ...aluno,
        dataNascimento: ajusteDataInput(aluno.dataNascimento),
      });
    } else {
      reset();
    }
  }, [aluno, reset]);

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const onSubmit = (data: FormData) => {
    if (aluno) {
      atualizarAluno(aluno.id, data);
    } else {
      adicionarAluno({ ...data, id: crypto.randomUUID() } as Aluno);
    }
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
        },
      }}
    >
      <DialogTitle
        sx={{
          pb: 1,
          fontWeight: 600,
        }}
      >
        {aluno ? "Editar Aluno" : "Cadastrar Aluno"}
        <div style={{ fontSize: 14, fontWeight: 400, opacity: 0.7 }}>
          {aluno
            ? "Atualize as informações do aluno"
            : "Preencha os dados abaixo para cadastrar um novo aluno"}
        </div>
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers>
          <Stack spacing={2.2}>
            <TextField
              label="Nome completo"
              fullWidth
              {...register("nome")}
              error={!!errors.nome}
              helperText={errors.nome?.message}
            />

            <Controller
              name="cpf"
              control={control}
              render={({ field }) => (
                <PatternFormat
                  {...field}
                  format="###.###.###-##"
                  customInput={TextField}
                  label="CPF"
                  fullWidth
                  error={!!errors.cpf}
                  helperText={errors.cpf?.message}
                  onChange={(e) =>
                    field.onChange(e.target.value.replace(/\D/g, ""))
                  }
                />
              )}
            />

            <TextField
              type="date"
              label="Data de nascimento"
              fullWidth
              InputLabelProps={{ shrink: true }}
              {...register("dataNascimento")}
              error={!!errors.dataNascimento}
              helperText={errors.dataNascimento?.message}
            />

            <Stack direction="row" spacing={2}>
              <TextField label="Cidade" fullWidth {...register("cidade")} />
              <TextField label="Bairro" fullWidth {...register("bairro")} />
            </Stack>

            <TextField label="Endereço" fullWidth {...register("endereco")} />

            <Controller
              name="tipoContrato"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  options={contratos}
                  value={field.value || null}
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Tipo de contrato"
                      error={!!errors.tipoContrato}
                      helperText={errors.tipoContrato?.message}
                    />
                  )}
                />
              )}
            />
          </Stack>
        </DialogContent>

        <DialogActions
          sx={{
            px: 3,
            py: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {aluno ? (
            <Button
              color="error"
              variant="outlined"
              onClick={() => {
                removerAluno(aluno.id);
                handleClose();
              }}
            >
              Remover aluno
            </Button>
          ) : (
            <span />
          )}

          <Stack direction="row" spacing={1.5}>
            <Button onClick={handleClose} variant="text">
              Cancelar
            </Button>
            <Button type="submit" variant="contained" size="large">
              {aluno ? "Salvar alterações" : "Cadastrar aluno"}
            </Button>
          </Stack>
        </DialogActions>
      </form>
    </Dialog>
  );
}

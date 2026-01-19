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

type CadastroAlunoProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  aluno?: Aluno | null;
};

export default function CadastroAluno({ open, setOpen, aluno }: CadastroAlunoProps) {
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
      reset(aluno);
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
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle fontWeight={600}>
        {aluno ? "Editar Aluno" : "Cadastrar Aluno"}
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers>
          <Stack spacing={2}>
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
            />

            <TextField label="Cidade" fullWidth {...register("cidade")} />
            <TextField label="Bairro" fullWidth {...register("bairro")} />
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
                    <TextField {...params} label="Tipo de contrato" />
                  )}
                />
              )}
            />
          </Stack>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2 }}>
          {aluno && (
            <Button
              color="error"
              variant="outlined"
              onClick={() => {
                removerAluno(aluno.id);
                handleClose();
              }}
            >
              Remover
            </Button>
          )}

          <Button onClick={handleClose}>Cancelar</Button>

          <Button type="submit" variant="contained">
            {aluno ? "Salvar alterações" : "Cadastrar"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

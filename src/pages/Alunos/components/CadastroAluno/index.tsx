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

import { tiposContrato } from "../../../../types/Aluno";

type CadastroAlunoProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function CadastroAluno({ open, setOpen }: CadastroAlunoProps) {
  const contratos = tiposContrato;
  const { adicionarAluno } = useAlunos();

  type formularioDados = yup.InferType<typeof cadastroAlunoSchema>;
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<formularioDados>({
    resolver: yupResolver(cadastroAlunoSchema) as any,
    mode: "onSubmit",
  });

  const handleClose = () => {
    console.log("reset");
    reset();
    setOpen(false);
  };

  return (
 <Dialog open={open} maxWidth="sm" fullWidth onClose={handleClose} keepMounted={false}>
  <DialogTitle>Cadastro de Aluno</DialogTitle>

  <form onSubmit={handleSubmit((data) => {
    adicionarAluno({ ...data, id: Math.random().toString() } as any);
    console.log(data);
    handleClose();
  })}>
    <DialogContent>
      <Stack spacing={2} sx={{ pt: 2 }}>
        <TextField
          label="Nome"
          fullWidth
          {...register("nome")}
          error={!!errors.nome}
          helperText={errors.nome?.message}
        />

        <Controller
          name="cpf"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <PatternFormat
              {...field}
              format="###.###.###-##"
              customInput={TextField}
              label="CPF"
              fullWidth
              error={!!errors.cpf}
              helperText={errors.cpf?.message}
              onChange={(e) => field.onChange(e.target.value.replace(/\D/g, ''))}
            />
          )}
        />

        <TextField
          label="Data de Nascimento"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          {...register("dataNascimento")}
          error={!!errors.dataNascimento}
          helperText={errors.dataNascimento?.message}
        />

        <TextField label="Cidade" fullWidth {...register("cidade")} />
        <TextField label="Bairro" fullWidth {...register("bairro")} />
        <TextField label="Endereço" fullWidth {...register("endereco")} />

        <Controller
          name="tipoContrato"
          control={control}
          defaultValue={"" as "Mensal" | "Trimestral" | "Anual" | undefined}
          render={({ field }) => (
            <Autocomplete
              value={field.value || ""}
              onChange={(_, value) => field.onChange(value)}
              options={contratos}
              renderInput={(params) => (
                <TextField {...params} label="Tipo de Contrato" error={!!errors.tipoContrato} helperText={errors.tipoContrato?.message} />
              )}
            />
          )}
        />
      </Stack>
    </DialogContent>

    <DialogActions>
      <Button type="button" onClick={handleClose} size="large" variant="outlined">
        Cancelar
      </Button>
      <Button type="submit" variant="contained" size="large">
        Salvar
      </Button>
    </DialogActions>
  </form>
</Dialog>

  );
}

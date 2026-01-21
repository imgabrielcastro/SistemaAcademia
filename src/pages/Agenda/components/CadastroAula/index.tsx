import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
  Autocomplete,
  Switch,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cadastroAgendaSchema } from "../../../../schema";
import { Aula, situacaoAula } from "../../../../types/Aula";
import { useEffect } from "react";
import { useAulas } from "../../../../hooks/useAulas";
import { useAlunos } from "../../../../hooks/useAlunos";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  aula?: Aula | null;
};

export default function CadastroAgenda({ open, setOpen, aula }: Props) {
  const { adicionarAula, atualizarAula } = useAulas();
  const { alunos } = useAlunos();

  const { register, handleSubmit, reset, control } = useForm<Aula>({
    resolver: yupResolver(cadastroAgendaSchema) as any,
    defaultValues: {
      titulo: "",
      modalidade: "",
      dataHoraInicio: "",
      situacao: "ABERTA",
      qntParticipantes: 0,
      qntVagas: 0,
      permiteAgendamentoPos: false,
      alunos: [],
    },
  });

  useEffect(() => {
    if (aula) {
      reset(aula);
    } else {
    reset({
      titulo: "",
      modalidade: "",
      dataHoraInicio: "",
      situacao: "ABERTA",
      qntParticipantes: 0,
      qntVagas: 0,
      permiteAgendamentoPos: false,
      alunos: [],
    });
  }
}, [aula, open, reset]);


  const onSubmit = (data: Aula) => {
    const payload: Aula = {
      ...data,
      id: aula?.id ?? crypto.randomUUID(),
    };

    aula ? atualizarAula(payload.id, payload) : adicionarAula(payload);
    setOpen(false);
    reset();
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
      <DialogTitle>{aula ? "Editar Aula" : "Cadastrar Aula"}</DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers>
          <Stack spacing={2}>
            <TextField label="Título" {...register("titulo")} />
            <TextField label="Modalidade" {...register("modalidade")} />

            <Stack direction="row" spacing={2}>
              <TextField
                type="datetime-local"
                label="Data"
                InputLabelProps={{ shrink: true }}
                fullWidth
                {...register("dataHoraInicio")}
              />
              <TextField
                type="number"
                label="Vagas"
                fullWidth
                {...register("qntVagas")}
              />
            </Stack>

            <Controller
              name="situacao"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  options={situacaoAula}
                  value={field.value}
                  onChange={(_, v) => field.onChange(v)}
                  renderInput={(p) => <TextField {...p} label="Situação" />}
                />
              )}
            />

            <Controller
              name="permiteAgendamentoPos"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Switch
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  }
                  label="Permite agendamento após início?"
                />
              )}
            />

            <Controller
              name="alunos"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  multiple
                  options={alunos}
                  value={field.value}
                  onChange={(_, v) => field.onChange(v)}
                  getOptionLabel={(o) => o.nome}
                  isOptionEqualToValue={(o, v) => o.id === v.id}
                  renderInput={(p) => <TextField {...p} label="Alunos" />}
                  renderOption={(props, aluno) => (
                    <li {...props}>
                      <Box>
                        <Typography>{aluno.nome}</Typography>
                        <Typography fontSize="0.8rem">{aluno.cpf}</Typography>
                      </Box>
                    </li>
                  )}
                />
              )}
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
          <Button type="submit" variant="contained">Salvar</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

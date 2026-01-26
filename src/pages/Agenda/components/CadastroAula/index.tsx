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

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<Aula>({
    resolver: yupResolver(cadastroAgendaSchema) as any,
    defaultValues: {
      titulo: "",
      modalidade: "",
      dataHoraInicio: "",
      situacao: "ABERTA",
      qntVagas: 0,
      permiteAgendamentoPos: false,
      alunos: [],
    },
  });

  const situacao = watch("situacao");
  const permiteAgendamentoPos = watch("permiteAgendamentoPos");
  const qntVagas = watch("qntVagas") || 0;

  const podeAgendarPos =
    situacao === "ABERTA" ||
    (situacao === "EM ANDAMENTO" && permiteAgendamentoPos);

  const aulaFinalizada = situacao === "FINALIZADA" || situacao === "CANCELADA";

  useEffect(() => {
    if (aula) {
      reset({ ...aula, alunos: aula.alunos ?? [] });
    } else {
      reset({
        titulo: "",
        modalidade: "",
        dataHoraInicio: "",
        situacao: "ABERTA",
        qntVagas: 0,
        permiteAgendamentoPos: false,
        alunos: [],
      });
    }
  }, [aula, open, reset]);

  function onSubmit(data: Aula) {
    const payload: Aula = {
      ...data,
      id: aula?.id ?? crypto.randomUUID(),
    };

    aula ? atualizarAula(payload.id, payload) : adicionarAula(payload);
    setOpen(false);
    reset();
  }

  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
      <DialogTitle>{aula ? "Editar Aula" : "Cadastrar Aula"}</DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers>
          <Stack spacing={2}>
            <TextField
              label="Título"
              disabled={aulaFinalizada}
              {...register("titulo")}
              error={!!errors.titulo}
              helperText={errors.titulo?.message}
            />

            <TextField
              label="Modalidade"
              disabled={aulaFinalizada}
              {...register("modalidade")}
              error={!!errors.modalidade}
              helperText={errors.modalidade?.message}
            />

            <Stack direction="row" spacing={2}>
              <TextField
                type="datetime-local"
                label="Data"
                InputLabelProps={{ shrink: true }}
                disabled={aulaFinalizada}
                fullWidth
                {...register("dataHoraInicio")}
                error={!!errors.dataHoraInicio}
                helperText={errors.dataHoraInicio?.message}
              />

              <TextField
                type="number"
                label="Vagas"
                disabled={aulaFinalizada}
                fullWidth
                {...register("qntVagas")}
                error={!!errors.qntVagas}
                helperText={errors.qntVagas?.message}
              />
            </Stack>

            <Controller
              name="situacao"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  options={situacaoAula}
                  value={field.value}
                  disabled={aulaFinalizada}
                  onChange={(_, v) => field.onChange(v)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Situação"
                      error={!!errors.situacao}
                      helperText={errors.situacao?.message}
                    />
                  )}
                />
              )}
            />

            <Controller
              name="permiteAgendamentoPos"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  disabled={aulaFinalizada}
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
                  disabled={!podeAgendarPos || aulaFinalizada}
                  onChange={(_, v) => {
                    if (qntVagas > 0 && v.length > qntVagas) return;
                    field.onChange(v);
                  }}
                  getOptionLabel={(o) => o.nome}
                  isOptionEqualToValue={(o, v) => o.id === v.id}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Alunos"
                      error={!!errors.alunos}
                      helperText={errors.alunos?.message}
                    />
                  )}
                />
              )}
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
          <Button type="submit" variant="contained">
            Salvar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

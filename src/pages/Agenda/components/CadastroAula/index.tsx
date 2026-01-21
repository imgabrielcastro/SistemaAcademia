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
import { cadastroAgendaSchema } from "../../../../schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Aula, situacaoAula } from "../../../../types/Aula";
import { Controller } from "react-hook-form";
import { data } from "react-router-dom";
import { useAulas } from "../../../../hooks/useAulas";

type CadastroAlunoProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function CadastroAgenda({ open, setOpen }: CadastroAlunoProps) {
  const { adicionarAula } = useAulas();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cadastroAgendaSchema) as any,
  });

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const onSubmit = (data: any) => {
  const novaAula: Aula = {
    id: crypto.randomUUID(),
    titulo: data.descricao, 
    modalidade: data.modalidade,
    dataHoraInicio: data.dataInicio, 
    situacao: data.situacao,
    qntParticipantes: 0, 
    qntVagas: Number(data.capacidade) 
  };
  
  adicionarAula(novaAula);
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
        Cadastrar Aula
        <div style={{ fontSize: 14, fontWeight: 400, opacity: 0.7 }}>
          Preencha os dados abaixo para cadastrar uma nova aula
        </div>
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers>
          <Stack spacing={2.2}>
            <TextField
              label="Descrição"
              fullWidth
              {...register("descricao")}
              error={!!errors.descricao}
              helperText={errors.descricao?.message?.toString()}
            />

            <TextField
              label="Modalidade"
              fullWidth
              {...register("modalidade")}
              error={!!errors.modalidade}
              helperText={errors.modalidade?.message?.toString()}
            />

            <Stack direction="row" spacing={2.2}>
              <TextField
                type="datetime-local"
                label="Data de Início"
                fullWidth
                InputLabelProps={{ shrink: true }}
                {...register("dataInicio")}
                error={!!errors.dataInicio}
                helperText={errors.dataInicio?.message?.toString()}
              />

              <TextField
                label="Capacidade"
                fullWidth
                type="number"
                {...register("capacidade")}
                error={!!errors.capacidade}
                helperText={errors.capacidade?.message?.toString()}
              />
            </Stack>

            <Controller
              name="situacao"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  options={situacaoAula}
                  value={field.value || null}
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Situação"
                      error={!!errors.situacao}
                      helperText={errors.situacao?.message?.toString()}
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
          <Stack direction="row" spacing={1.5}>
            <Button onClick={handleClose} variant="text">
              Cancelar
            </Button>
            <Button type="submit" variant="contained" size="large">
              Salvar
            </Button>
          </Stack>
        </DialogActions>
      </form>
    </Dialog>
  );
}

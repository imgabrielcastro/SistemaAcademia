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

import { tiposContrato } from "../../../../types/Aluno";

const contratos = tiposContrato;

type CadastroAlunoProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function CadastroAluno({ open, setOpen }: CadastroAlunoProps) {
  return (
    <Dialog open={open} maxWidth="sm" fullWidth onClose={() => setOpen(false)}>
      <DialogTitle>Cadastro de Aluno</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ pt: 2 }}>
          <TextField label="Nome" fullWidth required />
          <TextField label="CPF"  required fullWidth />
          <TextField
            label="Data de Nascimento"
            type="date"
            required
            fullWidth   
            InputLabelProps={{ shrink: true }}
          />
          <TextField label="Cidade" fullWidth />
          <TextField label="Bairro" fullWidth />
          <TextField label="Endereço" fullWidth />
          <Autocomplete 
            options={contratos}
            renderInput={(params) => <TextField {...params} label="Tipo de Contrato" />}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setOpen(false);
          }}
        >
          Cancelar
        </Button>
        <Button variant="contained" onClick={() => {console.log("salvou")}}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}

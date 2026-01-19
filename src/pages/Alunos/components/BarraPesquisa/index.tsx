import { Box, TextField } from "@mui/material";

interface BarraPesquisaProps {
  searchAluno: string;
  onSearchChange: (searchAluno: string) => void;
}

export default function BarraPesquisa({ searchAluno, onSearchChange }: BarraPesquisaProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        width: "100%",
        mt: 2,
      }}
    >
      <TextField
        sx={{ borderColor: "primary.main" }}
        label="Buscar por nome ou CPF..."
        variant="outlined"
        size="small"
        fullWidth
        value={searchAluno}
        onChange={(e) => {
          onSearchChange(e.target.value);
        }}
      />
    </Box>
  );
}

export { BarraPesquisa };
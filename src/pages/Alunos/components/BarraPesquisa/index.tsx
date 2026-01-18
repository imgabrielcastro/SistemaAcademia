import { Box, TextField } from "@mui/material";

export default function BarraPesquisa() {
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
        label="Buscar por nome ou CPF..."
        variant="outlined"
        fullWidth
      />
    </Box>
  );
}

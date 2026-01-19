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
        sx={{ borderColor: "primary.main" }}
        label="Buscar por nome ou CPF..."
        variant="outlined"
        size="small"
        fullWidth
        onChange={(e) => console.log(e.target.value)}
      />
    </Box>
  );
}

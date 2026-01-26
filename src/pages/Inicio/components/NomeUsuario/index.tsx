import type { NomeUsuario } from "../../../../types/nomeUsuario";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface NomeUsuarioProps {
  nomeUsuario: NomeUsuario;
}

export default function NomeUsuario({ nomeUsuario }: NomeUsuarioProps) {
  return (
    <Typography variant="h6">
      Olá{" "}
      <Box component="span" sx={{ color: "primary.main", fontWeight: "bold" }}>
        {nomeUsuario.name}
      </Box>
      !
    </Typography>
  );
}

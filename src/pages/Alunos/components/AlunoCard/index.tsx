import { Box, Typography } from "@mui/material";
import HStack from "../../../../components/stacks/Hstack";
import { Aluno } from "../../../../types/Aluno";

export default function AlunoCard({ aluno }: { aluno: Aluno }) {
  const tipoContratoToColor: Record<Aluno["tipoContrato"], string> = {
    Mensal: "#4caf50",
    Trimestral: "#ff9800",
    Anual: "#f44336",
  };

  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid #ccc",
        p: 2,
        mt: 2,
        borderRadius: 3,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        cursor: "pointer",
        "&:hover": {
          borderColor: "primary.main",
        },
      }}
    >
      <Box>
        <Typography color={"primary.main"} fontWeight={"bold"}>
          {aluno.nome}
        </Typography>
        <HStack gap={2} alignItems="center" color={"text.secondary"}>
          <Typography>{aluno.cpf || "CPF não informado"}</Typography>
          <Typography
            variant="body2"
            sx={{
              bgcolor: tipoContratoToColor[aluno.tipoContrato],
              color: "white",
              px: 1,
              py: 0.5,
              borderRadius: 1,
            }}
          >
            {aluno.tipoContrato}
          </Typography>
        </HStack>
      </Box>
    </Box>
  );
}

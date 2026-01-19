import { Box, Typography } from "@mui/material";
import HStack from "../../../../components/stacks/Hstack";
import { Aluno } from "../../../../types/Aluno";

export default function AlunoCard({ aluno }: { aluno: Aluno }) {
  const tipoContratoToColor: Record<Aluno["tipoContrato"], string> = {
    Mensal: "#e8f5e9",
    Trimestral: "#FFF3E0",
    Anual: "#FFEBEE",
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
              color: () => {
                const colorMap = {
                  Mensal: "#44a148", 
                  Trimestral: "#EF6C02", 
                  Anual: "#EC5E59",
                };
                return colorMap[aluno.tipoContrato] || "#424242";
              },
              fontWeight: "bold",
              px: 1,
              py: 0.5,
              borderRadius: 4,
              textAlign: "center",
              minWidth: 70,
            }}
          >
            {aluno.tipoContrato}
          </Typography>
        </HStack>
      </Box>
    </Box>
  );
}

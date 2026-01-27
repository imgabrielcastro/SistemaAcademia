import { Box, Typography } from "@mui/material";
import HStack from "../../../../components/stacks/Hstack";
import { Aluno } from "../../../../types/Aluno";

type AlunoCardProps = {
  aluno: Aluno;
  onSelected?: (aluno: Aluno) => void;
};

export default function AlunoCard({ aluno, onSelected }: AlunoCardProps) {
  const tipoContratoToColor: Record<Aluno["tipoContrato"], string> = {
    Mensal: "#e8f5e9",
    Trimestral: "#FFF3E0",
    Anual: "#FFEBEE",
  };

  return (
    <Box
      onClick={() => onSelected?.(aluno)}
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
          transition: "all 0.3s ease-in-out",
        },
      }}
    >
      <Typography color="primary.main" fontWeight="bold">
        {aluno.nome}
      </Typography>

      <HStack gap={2} alignItems="center">
        <Typography color="text.secondary">
          {aluno.cpf
            ? aluno.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
            : "CPF não informado"}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            bgcolor: tipoContratoToColor[aluno.tipoContrato],
            color:
              aluno.tipoContrato === "Mensal"
                ? "#44a148"
                : aluno.tipoContrato === "Trimestral"
                  ? "#EF6C02"
                  : "#EC5E59",
            fontWeight: "bold",
            px: 1,
            py: 0.5,
            borderRadius: 4,
            minWidth: 80,
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          {aluno.tipoContrato}
        </Typography>
      </HStack>
    </Box>
  );
}

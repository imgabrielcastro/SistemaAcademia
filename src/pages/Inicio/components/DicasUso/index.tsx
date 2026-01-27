import { Box, Typography } from "@mui/material";
import NumeroDica from "./NumeroDica";
import VStack from "../../../../components/stacks/Vstack";

export default function DicasUso() {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: 2,
        p: 4,
        mt: 2,
        width: "100%",
        mx: "auto",
        maxWidth: 920,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Dicas Rápidas
      </Typography>
      <VStack gap={2} mt={2}>
        <NumeroDica
          numero={1}
          dica="Acesse a Agenda para visualizar as aulas e gerenciar participantes"
        />
        <NumeroDica
          numero={2}
          dica="Cadastre novos Alunos antes de adicioná-los as aulas"
        />
        <NumeroDica
          numero={3}
          dica="Após finalizar uma aula não poderá adicionar novos participantes"
        />
      </VStack>
    </Box>
  );
}

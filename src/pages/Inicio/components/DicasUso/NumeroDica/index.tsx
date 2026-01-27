import { Box, Typography } from "@mui/material";
import HStack from "../../../../../components/stacks/Hstack";

interface NumeroDicaProps {
  numero: number;
  dica: string;
}

export default function NumeroDica({ numero, dica }: NumeroDicaProps) {
  return (
    <HStack alignItems={"center"} gap={1}>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          borderRadius: 2,
          minWidth: 32,
          minHeight: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="body1">{numero}</Typography>
      </Box>
      <Typography variant="body1">{dica}</Typography>
    </HStack>
  );
}

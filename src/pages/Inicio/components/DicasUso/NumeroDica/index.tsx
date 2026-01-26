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
        }}
      >
        <Typography variant="body2">{numero}</Typography>
      </Box>
      <Typography variant="body2">{dica}</Typography>
    </HStack>
  );
}

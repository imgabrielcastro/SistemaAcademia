import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";

export default function Agenda() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Agenda de Aulas
        </Typography>
      </Box>
    </Box>
  );
}
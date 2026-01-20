import { Box } from "@mui/material";
import Header from "../../components/Header";
import ListaAgenda from "./components/ListaAgenda";
import VStack from "../../components/stacks/Vstack";
import BotaoFiltroAgenda from "./components/BotaoFiltroAgenda";
  
export default function Agenda() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        p: 3,
      }}
    >
      <Header />
      <VStack px={2} mt={1}>
        <BotaoFiltroAgenda titulo="Agenda" descricao="Lista de aulas" buttonText="Nova Aula"/>
      </VStack>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 2,
          maxWidth: { xs: "400px", sm: "100%" },
          justifyContent: "center",
          mt: 1,
        }}
      >
        <ListaAgenda />
      </Box>
    </Box>
  );
}

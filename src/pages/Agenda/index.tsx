import { Box } from "@mui/material";
import Header from "../../components/Header";
import ListaAgenda from "./components/ListaAgenda";
import VStack from "../../components/stacks/Vstack";
import BotaoFiltroAgenda from "./components/BotaoFiltroAgenda";
import CadastroAula from "./components/CadastroAula";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useAulas } from "../../hooks/useAulas";

export default function Agenda() {
  const [open, setOpen] = useState(false);
  const { aulas } = useAulas();
  const [filterDate, setFilterDate] = useState<Dayjs | null>(null);
  const filteredAulas = filterDate
    ? aulas.filter((aula) => {
        const aulaDate = dayjs(aula.dataHoraInicio);
        return aulaDate.isSame(filterDate, "day");
      })
    : aulas;

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
        <BotaoFiltroAgenda
          titulo="Agenda"
          descricao="Lista de aulas"
          buttonText="Nova Aula"
          onButtonClick={() => setOpen(true)}
          onDataFilter={(date) => setFilterDate(date)}
        />
      </VStack>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(auto-fit, minmax(280px, 1fr))",
            sm:
              filteredAulas.length === 2
                ? "repeat(2, 1fr)"
                : "repeat(auto-fit, minmax(280px, 1fr))",
          },
          gap: 2,
          maxWidth: { xs: "400px", sm: "100%" },
          justifyContent: "center",
          mt: 1,
        }}
      >
        <ListaAgenda aulas={filteredAulas} />

        <CadastroAula open={open} setOpen={setOpen} />
      </Box>
    </Box>
  );
}

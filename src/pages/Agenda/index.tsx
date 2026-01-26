import { Box } from "@mui/material";
import Header from "../../components/Header";
import ListaAgenda from "./components/ListaAgenda";
import VStack from "../../components/stacks/Vstack";
import BotaoFiltroAgenda from "./components/BotaoFiltroAgenda";
import CadastroAgenda from "./components/CadastroAula";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useAulas } from "../../hooks/useAulas";
import { Aula } from "../../types/Aula";

export default function Agenda() {
  const [open, setOpen] = useState(false);
  const [filterDate, setFilterDate] = useState<Dayjs | null>(null);
  const [aulaSelecionada, setAulaSelecionada] = useState<Aula | null>(null);

  const { aulas } = useAulas();

  const filteredAulas = filterDate
    ? aulas.filter((aula) =>
        dayjs(aula.dataHoraInicio).isSame(filterDate, "day")
      )
    : aulas;

  const handleNovaAula = () => {
    setAulaSelecionada(null);
    setOpen(true);
  };

  const handleAulaClick = (aula: Aula) => {
    setAulaSelecionada(aula);
    setOpen(true);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", p: 3 }}>
      <Header />

      <VStack px={0.5} mt={1}>
        <BotaoFiltroAgenda
          titulo="Agenda"
          descricao="Lista de aulas"
          buttonText="Nova Aula"
          onButtonClick={handleNovaAula}
          onDataFilter={(date) => setFilterDate(date)}
        />
      </VStack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 2,
          mt: 2,
        }}
      >
        <ListaAgenda aulas={filteredAulas} onAulaClick={handleAulaClick} />
      </Box>

      <CadastroAgenda
        open={open}
        setOpen={setOpen}
        aula={aulaSelecionada}
      />
    </Box>
  );
}

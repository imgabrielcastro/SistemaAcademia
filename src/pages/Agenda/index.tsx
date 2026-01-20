import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import CardAgenda from "./components/CardAgenda";
import VStack from "../../components/stacks/Vstack";
import HStack from "../../components/stacks/Hstack";

export default function Agenda() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box
    sx={{
      display: "grid",
     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 2,
      maxWidth: { xs: "400px", sm: "100%" },
      justifyContent: "center",
      p: 2,
    }}
  >
        <CardAgenda card={{ id: "1", titulo: "Aerobica", modalidade: "Aerobica", dataHoraInicio: "19/04/2025 19:00", situacao: "EM ANDAMENTO", qntParticipantes: 10, qntVagas: 20 }} />
        <CardAgenda card={{ id: "1", titulo: "Aerobica", modalidade: "Aerobica", dataHoraInicio: "19/04/2025 19:00", situacao: "EM ANDAMENTO", qntParticipantes: 10, qntVagas: 20 }} />
        <CardAgenda card={{ id: "1", titulo: "Aerobica", modalidade: "Aerobica", dataHoraInicio: "19/04/2025 19:00", situacao: "EM ANDAMENTO", qntParticipantes: 10, qntVagas: 20 }} />
        <CardAgenda card={{ id: "1", titulo: "Aerobica", modalidade: "Aerobica", dataHoraInicio: "19/04/2025 19:00", situacao: "EM ANDAMENTO", qntParticipantes: 10, qntVagas: 20 }} />
        <CardAgenda card={{ id: "1", titulo: "Aerobica", modalidade: "Aerobica", dataHoraInicio: "19/04/2025 19:00", situacao: "EM ANDAMENTO", qntParticipantes: 10, qntVagas: 20 }} />
        <CardAgenda card={{ id: "1", titulo: "Aerobica", modalidade: "Aerobica", dataHoraInicio: "19/04/2025 19:00", situacao: "EM ANDAMENTO", qntParticipantes: 10, qntVagas: 20 }} />
        <CardAgenda card={{ id: "1", titulo: "Aerobica", modalidade: "Aerobica", dataHoraInicio: "19/04/2025 19:00", situacao: "EM ANDAMENTO", qntParticipantes: 10, qntVagas: 20 }} />
        <CardAgenda card={{ id: "1", titulo: "Aerobica", modalidade: "Aerobica", dataHoraInicio: "19/04/2025 19:00", situacao: "EM ANDAMENTO", qntParticipantes: 10, qntVagas: 20 }} />
        <CardAgenda card={{ id: "1", titulo: "Aerobica", modalidade: "Aerobica", dataHoraInicio: "19/04/2025 19:00", situacao: "EM ANDAMENTO", qntParticipantes: 10, qntVagas: 20 }} />
        <CardAgenda card={{ id: "1", titulo: "Aerobica", modalidade: "Aerobica", dataHoraInicio: "19/04/2025 19:00", situacao: "EM ANDAMENTO", qntParticipantes: 10, qntVagas: 20 }} />
        <CardAgenda card={{ id: "1", titulo: "Aerobica", modalidade: "Aerobica", dataHoraInicio: "19/04/2025 19:00", situacao: "EM ANDAMENTO", qntParticipantes: 10, qntVagas: 20 }} />
        <CardAgenda card={{ id: "1", titulo: "Aerobica", modalidade: "Aerobica", dataHoraInicio: "19/04/2025 19:00", situacao: "EM ANDAMENTO", qntParticipantes: 10, qntVagas: 20 }} />
        <CardAgenda card={{ id: "1", titulo: "Aerobica", modalidade: "Aerobica", dataHoraInicio: "19/04/2025 19:00", situacao: "EM ANDAMENTO", qntParticipantes: 10, qntVagas: 20 }} />
        <CardAgenda card={{ id: "1", titulo: "Aerobica", modalidade: "Aerobica", dataHoraInicio: "19/04/2025 19:00", situacao: "EM ANDAMENTO", qntParticipantes: 10, qntVagas: 20 }} />
        <CardAgenda card={{ id: "1", titulo: "Aerobica", modalidade: "Aerobica", dataHoraInicio: "19/04/2025 19:00", situacao: "EM ANDAMENTO", qntParticipantes: 10, qntVagas: 20 }} />
        <CardAgenda card={{ id: "1", titulo: "Aerobica", modalidade: "Aerobica", dataHoraInicio: "19/04/2025 19:00", situacao: "EM ANDAMENTO", qntParticipantes: 10, qntVagas: 20 }} />
        <CardAgenda card={{ id: "1", titulo: "Aerobica", modalidade: "Aerobica", dataHoraInicio: "19/04/2025 19:00", situacao: "EM ANDAMENTO", qntParticipantes: 10, qntVagas: 20 }} />
      </Box>
    </Box>
  );
}
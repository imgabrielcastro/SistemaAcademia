import CardAgenda from "../CardAgenda";
import { Aula } from "../../../../types/Aula";
import { Typography } from "@mui/material";

interface ListaAgendaProps {
  aulas: Aula[];
  onAulaClick: (aula: Aula) => void;
}

export default function ListaAgenda({ aulas, onAulaClick }: ListaAgendaProps) {
  if (aulas.length === 0) {
    return (
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ textAlign: "center", width: "100%" }}
      >
        Nenhuma aula encontrada
      </Typography>
    );
  }

  return (
    <>
      {aulas.map((aula) => (
        <CardAgenda
          key={aula.id}
          card={aula}
          onClick={() => onAulaClick(aula)}
        />
      ))}
    </>
  );
}

import CardAgenda from "../CardAgenda";
import { Aula } from "../../../../types/Aula";
import { Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { useEffect, useState } from "react";

interface ListaAgendaProps {
  aulas: Aula[];
  onAulaClick: (aula: Aula) => void;
}

export default function ListaAgenda({ aulas, onAulaClick }: ListaAgendaProps) {
  const [loading, setLoading] = useState(true);

  //adicionando skeleton para simular o loading de um backend futuro, para melhor experiencia do usuario
  useEffect(() => {
    setLoading(true);
    const timeoutId = window.setTimeout(() => setLoading(false), 400);
    return () => window.clearTimeout(timeoutId);
  }, [aulas]);

  if (loading) {
    return (
      <>
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            height={140}
            sx={{ width: "100%", borderRadius: 2 }}
          />
        ))}
      </>
    );
  }

  if (aulas.length === 0) {
    return (
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{
          gridColumn: "1 / -1",
          justifySelf: "center",
          textAlign: "center",
          width: "100%",
        }}
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

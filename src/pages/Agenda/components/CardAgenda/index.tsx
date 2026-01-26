import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Aula } from "../../../../types/Aula";
import HStack from "../../../../components/stacks/Hstack";
import { formatarDataHoraBR } from "../../../../utils/formatarData";

interface CardAgendaProps {
  card: Aula;
  onClick: () => void;
}

export default function CardAgenda({ card, onClick }: CardAgendaProps) {
  const situacaoColor =
    card.situacao === "ABERTA"
      ? "#F2C94C"
      : card.situacao === "EM ANDAMENTO"
        ? "#1565c0"
        : card.situacao === "FINALIZADA"
          ? "#2E7D32"
          : "#837676ff";

  return (
    <Card
      onClick={onClick}
      sx={{
        border: 1,
        maxWidth: 320,
        borderRadius: 4,
        borderColor: "grey.300",
        boxShadow: 2,
        cursor: "pointer",
        "&:hover": { borderColor: "primary.main" },
      }}
    >
      <CardContent>
        <HStack justifyContent="space-between">
          <Typography fontWeight="bold">{card.titulo}</Typography>
          <Typography fontWeight="bold">
            {card.alunos.length}/{card.qntVagas}
          </Typography>
        </HStack>

        <Typography sx={{ color: "text.secondary", mb: 1 }}>
          {card.modalidade}
        </Typography>

        <HStack justifyContent="space-between">
          <Typography variant="caption">
            {formatarDataHoraBR(card.dataHoraInicio)}
          </Typography>
          <Typography fontWeight="bold" sx={{ color: situacaoColor }}>
            {card.situacao}
          </Typography>
        </HStack>
      </CardContent>
    </Card>
  );
}

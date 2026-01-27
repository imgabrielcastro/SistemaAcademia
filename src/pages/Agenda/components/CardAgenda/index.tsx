import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
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
        transition: "all 0.3s ease-in-out",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          minHeight: 140,
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <Box>
          <HStack justifyContent="space-between" alignItems="flex-start">
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              {card.titulo}
            </Typography>
            <Typography variant="body1" sx={{ ml: 1, flexShrink: 0 }}>
              {card.alunos.length}/{card.qntVagas}
            </Typography>
          </HStack>

          <Typography sx={{ color: "text.secondary", mt: 0.5 }}>
            {card.modalidade}
          </Typography>
        </Box>

        <HStack justifyContent="space-between" alignItems="center">
          <Typography variant="body2">
            {formatarDataHoraBR(card.dataHoraInicio)}
          </Typography>
          <Typography variant="body2" fontWeight="bold" sx={{ color: situacaoColor }}>
            {card.situacao}
          </Typography>
        </HStack>
      </CardContent>
    </Card>
  );
}

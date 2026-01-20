import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Link } from "@mui/material";
import type { CardAgenda } from "../../../../types/cardAgenda";
import HStack from "../../../../components/stacks/Hstack";

export default function CardAgenda({ card }: { card: CardAgenda }) {
  return (
    <Card
      sx={{
        border: 1,
        maxWidth: 320,
        borderRadius: 4,
        borderColor: "grey.300",
        boxShadow: 2,
        cursor: "pointer",
        "&:hover": {
          borderColor: "primary.main",
        },
      }}
    >
      <Link href={card.dataHoraInicio} underline="none">
        <CardContent>
          <HStack justifyContent={"space-between"}>
            <Typography variant="h6" component="div" fontWeight={"bold"}>
              {card.titulo}
            </Typography>
            <Typography variant="h6" component="div" fontWeight={"bold"}>
              {card.qntParticipantes}/{card.qntVagas}
            </Typography>
          </HStack>
          <Typography sx={{ color: "text.secondary", mb: 1.5}}>
            {card.modalidade}
          </Typography>

          <HStack justifyContent={"space-between"} paddingTop={1}>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {card.dataHoraInicio}
            </Typography>
            <Typography variant="body2" fontWeight={"bold"} sx={{ color: "text.secondary" }}>
              {card.situacao}
            </Typography>
          </HStack>
        </CardContent>
      </Link>
    </Card>
  );
}

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "@mui/material";
import type { CardNavegacaoInicio } from "../../../../types/cardNavegacaoInicio";

export default function NavegacaoCard({ card }: { card: CardNavegacaoInicio }) {
  return (
    <Card
      sx={{
        border: 1,
        flex: 1,
        borderRadius: 4,
        borderColor: "grey.300",
        boxShadow: 2,
        cursor: "pointer",
        "&:hover": {
          borderColor: "primary.main",
        },
      }}
    >
      <Link
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
      >
        <CardContent>
          {card.icon === "calendar" ? <CalendarTodayIcon /> : <PeopleIcon />}
          <Typography variant="h5" component="div" fontWeight={"bold"}>
            {card.titulo}
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            {card.descricao}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large">Acessar</Button>
        </CardActions>
      </Link>
    </Card>
  );
}

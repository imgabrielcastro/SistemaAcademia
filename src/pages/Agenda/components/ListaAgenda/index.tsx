import CardAgenda from "../CardAgenda";
import { Aula } from "../../../../types/Aula";
import { Box, Typography } from "@mui/material";

const ListaAgenda = ({ aulas }: { aulas: Aula[] }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm:
            aulas.length === 2
              ? "repeat(2, 1fr)"
              : "repeat(auto-fit, minmax(280px, 1fr))",
        },
        gap: 2,
        width: "100%",
      }}
    >
      {aulas.length === 0 ? (
        <Typography
          variant="h6"
          component="div"
          fontWeight={"bold"}
          sx={{ textAlign: "center" }}
        >
          Nenhuma aula encontrada
        </Typography>
      ) : (
        aulas.map((aula) => <CardAgenda key={aula.id} card={aula} />)
      )}
    </Box>
  );
};

export default ListaAgenda;

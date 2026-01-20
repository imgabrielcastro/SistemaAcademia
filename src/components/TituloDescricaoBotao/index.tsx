import { Button } from "@mui/material";
import HStack from "../stacks/Hstack";
import VStack from "../stacks/Vstack";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

type TituloDescricaoBotaoProps = {
  titulo: string;
  descricao: string;
  buttonText: string;
  onButtonClick?: () => void;
  isAgenda?: boolean;
};



export default function TituloDescricaoBotao({ titulo, descricao, buttonText, onButtonClick, isAgenda}: TituloDescricaoBotaoProps) {
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      flexDirection={{ xs: "column", sm: "row" }}
    >
      <VStack flex={1} alignItems={{ xs: "center", sm: "flex-start" }}>
        <Typography variant="h4" component="h2">
          {titulo}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {descricao}
        </Typography>
      </VStack>
      <Button
        variant="contained"
        size="large"
        startIcon={<AddIcon />}
        sx={{
          whiteSpace: "nowrap",
          width: { xs: "100%", sm: "auto" },
          fontWeight: "bold",
        }}
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </HStack>
  );
}

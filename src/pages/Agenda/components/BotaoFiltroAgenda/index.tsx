import { Button } from "@mui/material";
import HStack from "../../../../components/stacks/Hstack";
import VStack from "../../../../components/stacks/Vstack";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

type FiltroAgendaProps = {
  titulo: string;
  descricao: string;
  buttonText: string;
  onButtonClick?: () => void;
  onDataFilter?: (date: Dayjs | null) => void;
};

export default function FiltroAgenda({
  titulo,
  descricao,
  buttonText,
  onButtonClick,
  onDataFilter,
}: FiltroAgendaProps) {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleApplyFilter = () => {
    if (onDataFilter) {
      onDataFilter(selectedDate || null);
    }
  };
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      flexDirection={{ xs: "column", sm: "row" }}
      gap={2}
    >
      <VStack flex={1} alignItems={{ xs: "center", sm: "flex-start" }}>
        <Typography variant="h3" component="h2">
          {titulo}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {descricao}
        </Typography>
      </VStack>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Selecione uma data"
          format="DD/MM/YYYY"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          slotProps={{
            textField: {
              size: "small",
              sx: {
                width: 200,
              },
            },
          }}
        />
      </LocalizationProvider>

      <Button
        variant="contained"
        size="large"
        sx={{
          whiteSpace: "nowrap",
          width: { xs: "100%", sm: "auto" },
          fontWeight: "bold",
        }}
        onClick={handleApplyFilter}
      >
        Aplicar Filtros
      </Button>

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

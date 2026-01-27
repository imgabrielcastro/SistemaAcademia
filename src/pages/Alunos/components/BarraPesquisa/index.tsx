import { Box, TextField } from "@mui/material";
import useDebounce from "../../../../hooks/useDebounce";
import { useState } from "react";

interface BarraPesquisaProps {
  searchAluno: string;
  onSearchChange: (searchAluno: string) => void;
}

export default function BarraPesquisa({
  searchAluno,
  onSearchChange,
}: BarraPesquisaProps) {
  const [inputValue, setInputValue] = useState(searchAluno);
  const debouncedSearch = useDebounce(onSearchChange, 200);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        width: "100%",
        mt: 2,
      }}
    >
      <TextField
        sx={{ borderColor: "primary.main", transition: "all 0.3s ease" }}
        label="Buscar por nome ou CPF..."
        variant="outlined"
        size="small"
        fullWidth
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          debouncedSearch(e.target.value);
        }}
      />
    </Box>
  );
}

export { BarraPesquisa };

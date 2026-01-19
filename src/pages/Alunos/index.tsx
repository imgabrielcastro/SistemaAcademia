import { Box } from "@mui/material";
import Header from "../../components/Header";
import TituloDescricaoBotao from "../../components/TituloDescricaoBotao";
import BarraPesquisa from "./components/BarraPesquisa";
import CadastroAluno from "./components/CadastroAluno";
import { useState } from "react";
import { ListaAlunos } from "./components/ListaAlunos";

export default function Alunos() {
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        p: 4,
      }}
    >
      <Header />
      <Box>
        <TituloDescricaoBotao
          titulo="Alunos"
          descricao="2 alunos cadastrados"
          buttonText="Novo Aluno"
          onButtonClick={() => {
            setOpen(true);
            console.log("modal aberto");
          }}
        />

        <CadastroAluno open={open} setOpen={setOpen} />

        <BarraPesquisa />
        
        <ListaAlunos />
      </Box>
    </Box>
  );
}


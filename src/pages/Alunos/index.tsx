import { Box } from "@mui/material";
import Header from "../../components/Header";
import TituloDescricaoBotao from "../../components/TituloDescricaoBotao";
import CadastroAluno from "./components/CadastroAluno";
import { useState } from "react";
import { ListaAlunos } from "./components/ListaAlunos";
import { Aluno } from "../../types/Aluno";

export default function Alunos() {
  const [open, setOpen] = useState(false);
  const [alunoSelecionado, setAlunoSelecionado] = useState<Aluno | null>(null);

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
            setAlunoSelecionado(null);
            setOpen(true);
          }}
        />

        <CadastroAluno
          open={open}
          setOpen={setOpen}
          aluno={alunoSelecionado}
        />

        <ListaAlunos
          onSelectAluno={(aluno) => {
            setAlunoSelecionado(aluno);
            setOpen(true);
          }}
        />
      </Box>
    </Box>
  );
}

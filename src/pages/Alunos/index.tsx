import { Box } from "@mui/material";
import Header from "../../components/Header";
import TituloDescricaoBotao from "../../components/TituloDescricaoBotao";
import BarraPesquisa from "./components/BarraPesquisa";
import Aluno from "./components/Aluno";

export default function Alunos() {
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
        />
        <BarraPesquisa />
        <Aluno
          aluno={{
            id: "1",
            nome: "Gabriel Castro",
            cpf: "123.456.789-00",
            tipoContrato: "Mensal",
          }}
        />
        <Aluno
          aluno={{
            id: "1",
            nome: "João Silva",
            cpf: "123.456.789-00",
            tipoContrato: "Mensal",
          }}
        />
        <Aluno
          aluno={{
            id: "1",
            nome: "Saymon Espindola",
            cpf: "123.456.789-00",
            tipoContrato: "Anual",
          }}
        />
        <Aluno
          aluno={{
            id: "1",
            nome: "Maria Santos",
            cpf: "123.456.789-00",
            tipoContrato: "Semestral",
          }}
        />
        <Aluno
          aluno={{
            id: "1",
            nome: "Pedro Alves",
            cpf: "123.456.789-00",
            tipoContrato: "Semestral",
          }}
        />
        <Aluno
          aluno={{
            id: "1",
            nome: "Ana Paula",
            cpf: "123.456.789-00",
            tipoContrato: "Trimestral",
          }}
        />
      </Box>
    </Box>
  );
}

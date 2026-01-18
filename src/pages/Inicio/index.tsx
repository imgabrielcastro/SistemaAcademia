import { Box, Container, Typography } from "@mui/material";
import Header from "../../components/Header";
import NomeUsuario from "./components/NomeUsuario";
import NavegacaoCard from "./components/NavegacaoCard";
import HStack from "../../components/stacks/Hstack";
import DicasUso from "./components/DicasUso";
import VStack from "../../components/stacks/Vstack";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box
        component="main"
        sx={{
          mt: 8,
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 12,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <NomeUsuario nomeUsuario={{ name: "José Gabriel" }} />
          <Typography variant="h3" textAlign="center">
            Bem-vindo ao{" "}
            <Box
              component="span"
              sx={{ color: "primary.main", fontWeight: "bold" }}
            >
              NextFit
            </Box>
            !
          </Typography>

          <Box
            sx={{
              mt: 4,
              width: "100%",
              maxWidth: 920,
              mx: "auto",
            }}
          >
            <HStack gap={2} flexDirection={{ xs: "column", md: "row" }}>
              <NavegacaoCard
                card={{
                  icon: "calendar",
                  titulo: "Agenda de Aulas",
                  descricao: "Visualize e gerencie todas as aulas",
                  link: "https://www.youtube.com",
                }}
              />
              <NavegacaoCard
                card={{
                  icon: "people",
                  titulo: "Gestão de Alunos",
                  descricao: "Cadastre e gerencie seus alunos",
                  link: "https://www.youtube.com",
                }}
              />
            </HStack>
            <DicasUso />
            <VStack alignItems="center" mt={6} mb={4} gap={1}>
              <Typography textAlign="center" variant="caption">
                Feito com 💜 por José Gabriel
              </Typography>
            </VStack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default App;

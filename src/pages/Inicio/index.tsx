import { Box, Container, Typography } from "@mui/material";
import NomeUsuario from "./components/NomeUsuario";
import NavegacaoCard from "./components/NavegacaoCard";
import DicasUso from "./components/DicasUso";
import VStack from "../../components/stacks/Vstack";

function App() {
  return (
    <Box component="main" sx={{ mt: 8 }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <NomeUsuario nomeUsuario={{ name: "José Gabriel" }} />
        <Typography variant="h2" textAlign="center">
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
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
            }}
          >
            <NavegacaoCard
              card={{
                icon: "calendar",
                titulo: "Agenda de Aulas",
                descricao: "Visualize e gerencie todas as aulas",
                link: "/agenda",
              }}
            />
            <NavegacaoCard
              card={{
                icon: "people",
                titulo: "Gestão de Alunos",
                descricao: "Cadastre e gerencie seus alunos",
                link: "/alunos",
              }}
            />
          </Box>
          <DicasUso />
          <VStack alignItems="center" mt={6} mb={0} gap={1}>
            <Typography textAlign="center" variant="body1">
              Feito com 💜 por José Gabriel
            </Typography>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}

export default App;

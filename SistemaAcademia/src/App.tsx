import { Box, Container, Typography } from "@mui/material";
import Header from "./components/Header";

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
        <Container>
          <Typography variant="h4">Academia</Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;

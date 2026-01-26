import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Alunos from "./pages/Alunos";
import Agenda from "./pages/Agenda";

function App() {
  return (
    <Router>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Box component="main" sx={{ mt: 8, flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/alunos" element={<Alunos />} />
            <Route path="/agenda" element={<Agenda />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;

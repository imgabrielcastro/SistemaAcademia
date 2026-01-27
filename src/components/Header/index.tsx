import { AppBar, Box, Button, Toolbar, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import LogoNf from "../../assets/nextfit-academia-logo.svg";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PeopleIcon from "@mui/icons-material/People";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "primary.main", opacity: 0.95, width: "100%", justifyContent: "center" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          <Link to="/" style={{ textDecoration: "none", display: "flex" }}>
            <img src={LogoNf} alt="NextFit Academia" height="40" style={{ cursor: "pointer" }} />
          </Link>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button
            component={Link}
            to="/agenda"
            variant="text"
            size="large"
            color="secondary"
            sx={{ color: "secondary.main", fontWeight: "bold" }}
            startIcon={<DateRangeIcon />}
          >
            Agenda
          </Button>
          <Button
            component={Link}
            to="/alunos"
            variant="text"
            size="large"
            color="secondary"
            sx={{ color: "primary.secondary", fontWeight: "bold" }}
            startIcon={<PeopleIcon />}
          >
            Alunos
          </Button>
          <Avatar sx={{ bgcolor: "secondary.main", color: "primary.main" }}>
            GC
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

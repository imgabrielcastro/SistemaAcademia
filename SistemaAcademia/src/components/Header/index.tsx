import { AppBar, Box, Button, Toolbar, Avatar } from "@mui/material";
import LogoNf from "../../assets/nextfit-academia-logo.svg";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PeopleIcon from "@mui/icons-material/People";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "primary.main", opacity: 0.9, width: "100%" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          <img src={LogoNf} alt="NextFit Academia" height="40" />
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ color: "primary.main" }}
            startIcon={<DateRangeIcon />}
          >
            Agenda
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ color: "primary.main" }}
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

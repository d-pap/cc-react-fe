import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { Box, Button, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ProfileNavBar from './ProfileNavBar'; // Importing ProfileNavBar

const NavLink = styled(Button)(({ theme }) => ({
  color: "#DEF9C4",
  textDecoration: "none",
  borderRadius: "10px",
  whiteSpace: "nowrap", // Prevent text wrapping
  margin: "0 15px", // Add more margin between links
  "&:hover": {
    background: "#9CDBA6",
    color: "#468585",
  },
  "&.active": {
    color: "#DEF9C4",
    backgroundColor: "#50B498", // Active background color
  },
}));

const NavBarComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        <ListItem button component={RouterLink} to="/about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={RouterLink} to="/problems">
          <ListItemText primary="Problems" />
        </ListItem>
        <ListItem button component={RouterLink} to="/addProblems">
          <ListItemText primary="Add Problems" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
      <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
        <NavLink component={RouterLink} to="/" activeClassName="active">Home</NavLink>
        <NavLink component={RouterLink} to="/about" activeClassName="active">About</NavLink>
        <NavLink component={RouterLink} to="/problems" activeClassName="active">Problems</NavLink>
        <NavLink component={RouterLink} to="/addProblems" activeClassName="active">Add Problems</NavLink>
      </Box>
      <ProfileNavBar />
    </Box>
  );
};

export default NavBarComponent;

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Header() {
  return (
    <AppBar position="fixed" elevation={1} color="inherit">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ width: 40, height: 40, borderRadius: 1, bgcolor: "primary.main" }} />
            <Typography variant="h6" component="div">SaaSProduct</Typography>
          </Box>

          <Box>
            <Button href="#features">Features</Button>
            <Button href="#pricing">Pricing</Button>
            <Button href="#contact" variant="outlined" sx={{ ml: 2 }}>Contact</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

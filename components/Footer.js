import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#fff", borderTop: "1px solid #eee", py: 6, mt: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h6">SaaSProduct</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          © {new Date().getFullYear()} SaaSProduct — Built with ❤️
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Link href="/terms">Terms</Link> · <Link href="/privacy" sx={{ ml: 1 }}>Privacy</Link>
        </Box>
      </Container>
    </Box>
  );
}

import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const features = [
  { title: "Feature flags", desc: "Turn features on/off without deploys." },
  { title: "User analytics", desc: "Understand behavior with real-time reports." },
  { title: "Integrations", desc: "Connect your stack via webhooks & SDKs." }
];

export default function Features() {
  return (
    <Container maxWidth="lg" id="features" sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom>Core features</Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {features.map((f) => (
          <Grid item xs={12} md={4} key={f.title}>
            <Paper elevation={1} sx={{ p: 3, height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ width: 44, height: 44, borderRadius: 1, bgcolor: "secondary.main" }} />
                <Typography variant="h6">{f.title}</Typography>
              </Box>
              <Typography sx={{ mt: 2 }} color="text.secondary">{f.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

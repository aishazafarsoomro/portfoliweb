import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

export default function Hero() {
  return (
    <Container maxWidth="lg" sx={{ pt: 8, pb: 6 }}>
      <motion.div initial="hidden" animate="show" variants={container}>
        <motion.div variants={item}>
          <Typography variant="h3" component="h1" gutterBottom>
            Build faster. Ship better. Delight customers.
          </Typography>
        </motion.div>

        <motion.div variants={item}>
          <Typography variant="h6" color="text.secondary" paragraph>
            All-in-one platform to manage feature flags, analytics, and in-app messaging — built for growing teams.
          </Typography>
        </motion.div>

        <motion.div variants={item}>
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <Button variant="contained" size="large" href="#signup">Start free trial</Button>
            <Button variant="outlined" size="large" href="#demo">Request demo</Button>
          </Box>
        </motion.div>
      </motion.div>

      {/* illustrative card */}
      <Box sx={{ mt: 6 }}>
        <Box
          sx={{
            background: "linear-gradient(135deg,#ffffff,#eef2ff)",
            borderRadius: 2,
            p: 3,
            boxShadow: 2,
            maxWidth: 920
          }}
        >
          <Typography variant="subtitle1">
            Example screenshot / product preview — replace with real images or Figma export.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

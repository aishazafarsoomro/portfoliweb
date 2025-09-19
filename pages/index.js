import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Home() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [status, setStatus] = React.useState(null);

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const json = await res.json();
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error: " + (json?.error || res.statusText));
      }
    } catch (err) {
      setStatus("error: " + err.message);
    }
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />

        <Container maxWidth="sm" sx={{ py: 6 }} id="contact">
          <Typography variant="h5" gutterBottom>Contact sales</Typography>
          <Box component="form" onSubmit={submit} sx={{ display: "grid", gap: 2 }}>
            <TextField label="Name" value={form.name} required onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <TextField label="Email" value={form.email} required onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <TextField label="Message" value={form.message} multiline rows={4} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <Button type="submit" variant="contained">Send</Button>
            {status && <Typography variant="body2" color="text.secondary">Status: {status}</Typography>}
          </Box>
        </Container>
      </main>
      <Footer />
    </>
  );
}

import * as React from "react";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";

const theme = createTheme({
  palette: {
    primary: { main: "#2B6CB0" },
    secondary: { main: "#2C7A7B" }
  },
  typography: {
    button: { textTransform: "none" }
  }
});

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove server-side injected styles if any
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Product — Landing</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

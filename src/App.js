import React from "react";
import Routes from "./routes";
import { StylesProvider } from "@material-ui/styles";
import GlobalStyle, { theme } from "./styles/globalStyle";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <MuiThemeProvider theme={theme}>
        <Routes />;
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

import { GlobalStyles } from "./styles/global-styles";
import { theme } from "./styles/theme";
import Home from "./templates/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />

      {/* <BrowserRouter>
        <Switch>
          <Route to="*" component={Home} />
        </Switch>
      </BrowserRouter> */}

      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);

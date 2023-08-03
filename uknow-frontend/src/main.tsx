import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import  CssBaseline  from "@mui/material/CssBaseline";
import { UknowTheme } from "./themes/ThemeUknow.tsx";
import APIErrorProvider from "./context/APIErrorContext.tsx";

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <APIErrorProvider>
        <ThemeProvider theme={UknowTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
        </APIErrorProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

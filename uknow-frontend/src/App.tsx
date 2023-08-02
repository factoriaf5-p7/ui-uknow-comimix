import Home from "./pages/Home";
import Hero from "./pages/Hero";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Recover from "./pages/Recover";
import UnderConstruction from "./pages/UnderConstruction";
import Course from "./pages/Course";
import AuthContextProvider from "./context/AuthContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { UknowTheme } from "./themes/ThemeUknow.tsx";

export const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider theme={UknowTheme}>
            <CssBaseline />
            <AuthContextProvider>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/home" element={<Home />} />
                <Route path="/course/:_id" element={<Course />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/recover" element={<Recover />} />
                <Route
                  path="/under-construction"
                  element={<UnderConstruction />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AuthContextProvider>
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;

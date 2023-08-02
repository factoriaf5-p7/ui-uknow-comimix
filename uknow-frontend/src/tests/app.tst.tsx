/* import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material";
import { UknowTheme } from "../themes/ThemeUknow";
import {queryClient} from '../main'

describe("Home Component", () => {
  beforeEach(() => {
   
  });

  test("should render the app", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider theme={UknowTheme}>
            <MemoryRouter initialEntries={["/home"]}>
              <Home />
            </MemoryRouter>
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    );
    screen.debug();

    await waitFor(() => {
    expect(screen.getByText("/home")).toBeInTheDocument();
    })
  });
});
 */
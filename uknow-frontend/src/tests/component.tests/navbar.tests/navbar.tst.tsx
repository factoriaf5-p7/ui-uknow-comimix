import Navbar from "../../../components/navbar/Navbar";
import { test, describe, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from "react";
import AuthContextProvider from "../../../context/AuthContext";


describe("Navbar Component", () => {
   vi.mock("../../../context/AuthContext", () => ({
    __esModule: true,
    default: React.createContext(undefined)
  })); 

test('renders Navbar component', () => {
    // Render the Navbar component in the virtual DOM
  render(<AuthContextProvider><Navbar /></AuthContextProvider>);
  
      // Check if the AppBar exists
  const appBarElement = screen.getByRole('toolbar');
  expect(appBarElement).toBeTruthy();

  // Check if the LogoNavbar exists
  const logoNavbarElement = screen.getByRole('img');
  expect(logoNavbarElement).toBeTruthy();

  // Check if the LoginBtn or AvatarBtn exists based on isLoggedIn state
  const loginBtnElement = screen.queryByText('Login');
  const avatarBtnElement = screen.queryByText('Avatar');
  expect(loginBtnElement || avatarBtnElement).toBeTruthy();
});
});
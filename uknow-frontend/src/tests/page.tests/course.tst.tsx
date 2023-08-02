/* import { test, describe, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Course from '../../pages/Course';
import Navbar from '../../components/navbar/Navbar';
import Content from '../../components/course/Content';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../main';

test('renders Navbar and Content components', () => {
    render(<Course />);
    screen.debug();

    const navbarElement = screen.getByText("Navbar");
  
    expect(navbarElement).toBeInTheDocument();
  });  */
import { test, describe, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Course from '../../pages/Course';
import Navbar from '../../components/navbar/Navbar';
import Content from '../../components/course/Content';

test('renders Navbar and Content components', () => {
    render(<Course />);
    screen.debug();

   /*  const navbarElement = screen.getByRole(Navbar);
    const contentElement = screen.getByType(Content); */
  /* 
    expect(navbarElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument(); */
  }); 
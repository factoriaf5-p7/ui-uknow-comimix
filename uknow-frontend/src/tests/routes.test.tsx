import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from '../pages/Hero';
import Home from '../pages/Home';
import Course from '../pages/Course';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Recover from '../pages/Recover';
import UnderConstruction from '../pages/UnderConstruction';
import NotFound from '../pages/NotFound';

describe('Router renders the correct pages', () => {

test('Snapshot test for Hero page', () => {
    const { asFragment } = render(
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </Router>
    );
  
    expect(asFragment()).toMatchSnapshot();
  });

  test('Snapshot test for Home page', () => {
    const { asFragment } = render(
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    );
  
    expect(asFragment()).toMatchSnapshot();
  });

  test('Snapshot test for Course page', () => {
    const { asFragment } = render(
      <Router>
        <Routes>
          <Route path="/course/:_id" element={<Course />} />
        </Routes>
      </Router>
    );
  
    expect(asFragment()).toMatchSnapshot();
  });

  test('Snapshot test for Dashboard page', () => {
    const { asFragment } = render(
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    );
  
    expect(asFragment()).toMatchSnapshot();
  });

  test('Snapshot test for Profile page', () => {
    const { asFragment } = render(
      <Router>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    );
  
    expect(asFragment()).toMatchSnapshot();
  });

  test('Snapshot test for Login page', () => {
    const { asFragment } = render(
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    );
  
    expect(asFragment()).toMatchSnapshot();
  });
  test('Snapshot test for Register page', () => {
    const { asFragment } = render(
      <Router>
        <Routes>
          <Route path="/signup" element={<Register />} />
        </Routes>
      </Router>
    );
  
    expect(asFragment()).toMatchSnapshot();
  });
  test('Snapshot test for Recover page', () => {
    const { asFragment } = render(
      <Router>
        <Routes>
          <Route path="/recover" element={<Recover />} />
        </Routes>
      </Router>
    );
  
    expect(asFragment()).toMatchSnapshot();
  });
  test('Snapshot test for Under Construction page', () => {
    const { asFragment } = render(
      <Router>
        <Routes>
          <Route path="/under-construction" element={<UnderConstruction />} />
        </Routes>
      </Router>
    );
  
    expect(asFragment()).toMatchSnapshot();
  });
  
  test('Snapshot test for Not Found page', () => {
    const { asFragment } = render(
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
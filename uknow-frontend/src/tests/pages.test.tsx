import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Course from "../pages/Course";
import { renderToString } from "react-dom/server";
import Hero from "../pages/Hero";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Recover from "../pages/Recover";
import Register from "../pages/Register";
import UnderConstruction from "../pages/UnderConstruction";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import { MemoryRouter } from "react-router-dom";
import { AuthContext, AuthContextType } from "../context/AuthContext";
import { User } from "../interfaces/user.interface";
import { CourseData } from "../interfaces/course.interface";
import EditCourse from "../pages/EditCourse";

const RouterWrapper = ({ children }: any) => {
  return <MemoryRouter>{children}</MemoryRouter>;
};
const mockAuthContextValue: AuthContextType = {
  isLoggedIn: true,
  loginData: {
    email: "",
    password: "",
  },
  setLoginData: () => {},
  login: () => {},
  logout: () => {},
  user: {
    _id: "1a",
    name: "john",
    last_name: "doe",
    email: "john@example.com",
    wallet_balance: 1000,
    created_courses: [],
    chat_notifications_sent: [],
    chat_notifications_received: [],
    profile: "yes",
    bought_courses: [],
    __v: 0,
  } as User,
};



  const mockCourse: CourseData = {
    _id: "mockCourseId",
    name: "string",
    price: 100,
    topic: "string",
    difficulty: "string",
    tags: [],
    bought: true,
    content: "string",
    createdAt: "string",
    updatedAt: "string",
    description: "string",
    image: "string",
    average: 3,
  };


const AuthContextMockProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AuthContext.Provider value={mockAuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

describe("Checks if the pages render the pages correctly", () => {
  test("Snapshot test for Course page", () => {
    const queryClient = new QueryClient();

    const html = renderToString(
      <QueryClientProvider client={queryClient}>
      <AuthContextMockProvider> 
          <RouterWrapper>
            <Course/>
          </RouterWrapper>
        </AuthContextMockProvider>
      </QueryClientProvider>
    );

    expect(html).toMatchSnapshot();
  });
  test("Snapshot test for Dashboard page", () => {
    const queryClient = new QueryClient();

    const html = renderToString(
      <QueryClientProvider client={queryClient}>
        <RouterWrapper>
          <AuthContextMockProvider>
            <Dashboard />
          </AuthContextMockProvider>
        </RouterWrapper>
      </QueryClientProvider>
    );

    expect(html).toMatchSnapshot();
  });

  test("Snapshot test for Hero page", () => {
    const queryClient = new QueryClient();

    const html = renderToString(
      <QueryClientProvider client={queryClient}>
        <RouterWrapper>
          <Hero />
        </RouterWrapper>
      </QueryClientProvider>
    );

    expect(html).toMatchSnapshot();
  });

  test("Snapshot test for Home page", () => {
    const queryClient = new QueryClient();

    const html = renderToString(
      <QueryClientProvider client={queryClient}>
        <RouterWrapper>
          <Home />
        </RouterWrapper>
      </QueryClientProvider>
    );

    expect(html).toMatchSnapshot();
  });

  test("Snapshot test for Login page", () => {
    const queryClient = new QueryClient();

    const html = renderToString(
      <QueryClientProvider client={queryClient}>
        <RouterWrapper>
          <Login />
        </RouterWrapper>
      </QueryClientProvider>
    );

    expect(html).toMatchSnapshot();
  });

  test("Snapshot test for NotFound page", () => {
    const queryClient = new QueryClient();

    const html = renderToString(
      <QueryClientProvider client={queryClient}>
        <RouterWrapper>
          <NotFound />
        </RouterWrapper>
      </QueryClientProvider>
    );

    expect(html).toMatchSnapshot();
  });

  test("Snapshot test for Profile page", () => {
    const queryClient = new QueryClient();

    const html = renderToString(
      <QueryClientProvider client={queryClient}>
        <RouterWrapper>
          <Profile />
        </RouterWrapper>
      </QueryClientProvider>
    );

    expect(html).toMatchSnapshot();
  });

  test("Snapshot test for Recover page", () => {
    const queryClient = new QueryClient();

    const html = renderToString(
      <QueryClientProvider client={queryClient}>
        <RouterWrapper>
          <Recover />
        </RouterWrapper>
      </QueryClientProvider>
    );

    expect(html).toMatchSnapshot();
  });

  test("Snapshot test for Register page", () => {
    const queryClient = new QueryClient();

    const html = renderToString(
      <QueryClientProvider client={queryClient}>
        <RouterWrapper>
          <Register />
        </RouterWrapper>
      </QueryClientProvider>
    );

    expect(html).toMatchSnapshot();
  });

  test("Snapshot test for Under Construction page", () => {
    const queryClient = new QueryClient();

    const html = renderToString(
      <QueryClientProvider client={queryClient}>
        <RouterWrapper>
          <UnderConstruction />
        </RouterWrapper>
      </QueryClientProvider>
    );

    expect(html).toMatchSnapshot();
  });
});

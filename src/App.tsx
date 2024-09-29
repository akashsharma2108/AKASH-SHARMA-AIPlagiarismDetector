import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./components/config/theme";
import LandingPage from "./pages/Home/HomePage";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ReportPage from "./pages/Report/ReportPage";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: <LandingPage />,
  },
  {
    path: "/report",
    element: <ReportPage />,
  },
]);

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

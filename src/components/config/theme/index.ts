import { Card, TextField, createTheme } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { motion } from "framer-motion";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#6200ea",
    },
    secondary: {
      main: "#b388ff",
    },
    background: {
      default: "#0a0015",
      paper: "rgba(255, 255, 255, 0.05)",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "4.5rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "3.5rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 25px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          backdropFilter: "blur(20px)",
        },
      },
    },
  },
});

export const GradientBackground = styled("div")({
  background: "radial-gradient(circle at top right, #4a0080, #0a0015)",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
});

export const GlowingText = styled(motion.div)(({ theme }) => ({
  color: theme.palette.primary.main,
  textShadow: "0 0 20px rgba(98, 0, 234, 0.5)",
}));

export const float = keyframes`
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(2deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  `;

export const FloatingCard = styled(motion(Card as any))(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
}));

export const FeatureIcon = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  borderRadius: "50%",
  padding: theme.spacing(2),
  display: "inline-flex",
  marginBottom: theme.spacing(2),
  boxShadow: "0 0 30px rgba(98, 0, 234, 0.6)",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
  },
}));
  
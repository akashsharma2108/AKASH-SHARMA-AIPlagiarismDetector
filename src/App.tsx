import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Box,
  Link,
  ThemeProvider,
  createTheme,
  CssBaseline,
  useMediaQuery,
} from '@mui/material'
import { styled, keyframes } from '@mui/system'
import { Bolt, CheckCircle, Description, Menu, ArrowForward } from '@mui/icons-material'
import { motion } from 'framer-motion'

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea',
    },
    secondary: {
      main: '#b388ff',
    },
    background: {
      default: '#0a0015',
      paper: 'rgba(255, 255, 255, 0.05)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 25px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          backdropFilter: 'blur(20px)',
        },
      },
    },
  },
})

const GradientBackground = styled('div')({
  background: 'radial-gradient(circle at top right, #4a0080, #0a0015)',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
})

const GlowingText = styled(motion.div)(({ theme }) => ({
  color: theme.palette.primary.main,
  textShadow: '0 0 20px rgba(98, 0, 234, 0.5)',
}))

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`

const FloatingCard = styled(motion(Card as any
))(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
}))

const FeatureIcon = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  borderRadius: '50%',
  padding: theme.spacing(2),
  display: 'inline-flex',
  marginBottom: theme.spacing(2),
  boxShadow: '0 0 30px rgba(98, 0, 234, 0.6)',
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
  },
}))

export default function LandingPage() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GradientBackground>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Description sx={{ mr: 1, verticalAlign: 'middle' }} />
              PlagiarismAI
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Features</Button>
              <Button color="inherit">Contact</Button>
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <Button color="inherit">
                <Menu />
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <GlowingText
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Typography variant="h1" gutterBottom>
                  AI-Powered Plagiarism Detection
                </Typography>
              </GlowingText>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <Typography variant="h5" paragraph sx={{ color: 'text.secondary' }}>
                  Ensure originality in seconds with our cutting-edge AI technology. Fast, accurate, and comprehensive.
                </Typography>
              </motion.div>
              <Box sx={{ mt: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your email"
                    InputProps={{
                      endAdornment: (
                        <Button
                          variant="contained"
                          color="secondary"
                          endIcon={<ArrowForward />}
                          sx={{
                            borderRadius: '30px',
                            boxShadow: '0 5px 15px rgba(179, 136, 255, 0.4)',
                          }}
                        >
                          Get Started
                        </Button>
                      ),
                    }}
                  />
                  <Typography variant="caption" sx={{ mt: 2, display: 'block', color: 'text.secondary' }}>
                    Start your free trial. No credit card required.
                  </Typography>
                </motion.div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', height: '400px' }}>
                <FloatingCard
                  sx={{
                    position: 'absolute',
                    top: '0',
                    left: '20%',
                    width: '60%',
                    height: '60%',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">Sample Report</Typography>
                  </CardContent>
                </FloatingCard>
                <FloatingCard
                  sx={{
                    position: 'absolute',
                    bottom: '0',
                    right: '20%',
                    width: '60%',
                    height: '60%',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.8,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">AI Analysis</Typography>
                  </CardContent>
                </FloatingCard>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h2" align="center" gutterBottom>
              Key Features
            </Typography>
          </motion.div>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              { icon: <Bolt />, title: 'Lightning Fast', description: 'Get results in seconds, not minutes.' },
              { icon: <CheckCircle />, title: 'Highly Accurate', description: 'Powered by advanced AI for precise detection.' },
              { icon: <Description />, title: 'Detailed Reports', description: 'Comprehensive analysis with source citations.' },
            ].map((feature, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 * (index + 1) }}
                >
                  <FloatingCard sx={{ height: '100%' }}>
                    <CardContent sx={{ textAlign: 'center' }}>
                      <FeatureIcon>{feature.icon}</FeatureIcon>
                      <Typography variant="h3" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </FloatingCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FloatingCard>
              <CardContent sx={{ textAlign: 'center', py: 6 }}>
                <Typography variant="h2" gutterBottom>
                  Ready to ensure originality?
                </Typography>
                <Typography variant="h5" paragraph sx={{ color: 'text.secondary' }}>
                  Join thousands of students and professionals who trust our platform for their plagiarism checks.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{
                    mt: 4,
                    px: 6,
                    py: 1.5,
                    fontSize: '1.2rem',
                    boxShadow: '0 5px 15px rgba(179, 136, 255, 0.4)',
                  }}
                >
                  Start Free Trial
                </Button>
                <Typography variant="caption" sx={{ mt: 2, display: 'block', color: 'text.secondary' }}>
                  No credit card required. 7-day free trial.
                </Typography>
              </CardContent>
            </FloatingCard>
          </motion.div>
        </Container>

        <Box component="footer" sx={{ mt: 'auto', py: 6 }}>
          <Container maxWidth="lg">
            <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
              © 2024 PlagiarismAI. All rights reserved.
            </Typography>
            <Typography variant="body2" align="center" sx={{ mt: 1, color: 'text.secondary' }}>
              <Link href="#" color="inherit" sx={{ mx: 1 }}>
                Terms of Service
              </Link>
              <Link href="#" color="inherit" sx={{ mx: 1 }}>
                Privacy Policy
              </Link>
            </Typography>
          </Container>
        </Box>
      </GradientBackground>
    </ThemeProvider>
  )
}
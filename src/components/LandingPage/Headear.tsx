import {
  Typography,
  Button,
  Container,
  Grid,
  CardContent,
  Box,
} from '@mui/material'
import { ArrowForward } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { GlowingText , FloatingCard , StyledTextField} from '../config/theme'



const Header = () => {
    return (
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
                        onClick={() => {
                          window.location.href = "/report";
                        }}
                        sx={{
                          lineHeight: '1',
                          fontSize: '0.7rem',
                          mr: '-1px',
                          padding: '12px 20px',
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
                  email is optional
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
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                   Ai is basically a computer program that can learn and adapt to new data without human intervention. It is a subset of artificial intelligence that focuses on the development of computer programs that can teach themselves to grow and change when exposed to new data.
                  </Typography>
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
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    75% plagiarism detected. 25% original content.
                  </Typography>
                </CardContent>
              </FloatingCard>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
    }

export default Header
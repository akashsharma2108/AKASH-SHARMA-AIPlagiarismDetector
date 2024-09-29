import {
  Typography,
  Button,
  Container,
  CardContent,
} from '@mui/material'
import { motion } from 'framer-motion'
import { FloatingCard } from '../config/theme'



const SecondaryInfo = () => {
    return(
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
                onClick={()=>{
                  window.location.href = "/report";
                }}
              >
                Start Free Trial
              </Button>
              <Typography variant="caption" sx={{ mt: 2, display: 'block', color: 'text.secondary' }}>
                free to use, no credit card required
              </Typography>
            </CardContent>
          </FloatingCard>
        </motion.div>
      </Container>
    )
}

export default SecondaryInfo;
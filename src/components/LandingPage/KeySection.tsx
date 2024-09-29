import {
  Typography,
  Container,
  Grid,
  CardContent,
} from '@mui/material'
import { Bolt, CheckCircle, Description } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { FloatingCard , FeatureIcon } from '../config/theme'


const KeySection = () => { 
    return (
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
    );
}

export default KeySection;
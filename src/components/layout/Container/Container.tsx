import { Box } from '@mui/material';

const Container: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {

  return (
    <>
    <Box sx={{ display: 'flex' }}>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            backgroundColor : '#f5f6fb',
            height: '100vh',
            overflowX : 'hidden',
            padding: '20px',
          }}
        >
          {children}
        </Box>{' '}
      </Box>
    </>
  );
};

export default Container;

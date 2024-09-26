import { useState } from 'react';
import { Alert, Slide, Snackbar } from '@mui/material';

export type Props = {
  snackbarShowMessage: (
    message: string,
    severity: string,
    duration?: number,
  ) => void;
};
/* eslint-disable react/display-name */
function withSnackbar<P extends Record<string, any>>(
  WrappedComponent: React.ComponentType<P>,
) {
  return (props: P) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [duration, setDuration] = useState(2000);
    const [severity, setSeverity] = useState<any | undefined>('success');

    const showMessage = (
      snackBarMessage: string,
      snackBarSeverity: string,
      snackBarDuration = 3000,
    ) => {
      setMessage(snackBarMessage);
      setSeverity(snackBarSeverity);
      setDuration(snackBarDuration);
      setOpen(true);
    };

    const handleClose = (_event: any, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

    return (
      <>
        <WrappedComponent {...props} snackbarShowMessage={showMessage} />
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{ maxWidth: 350 , zIndex:  999999}}
          autoHideDuration={duration}
          open={open}
          onClose={handleClose}
          TransitionComponent={Slide}
        >
          <Alert variant="filled" onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
      </>
    );
  };
}
export default withSnackbar;

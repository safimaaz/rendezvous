import React from 'react';
import { CircularProgress, Stack } from '@mui/material';

const CustomLoader: React.FC = () => {
  return (
    <Stack
      sx={{
        height: '90vh',
        width: '100%',
      }}
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Stack>
  );
};

export default CustomLoader;

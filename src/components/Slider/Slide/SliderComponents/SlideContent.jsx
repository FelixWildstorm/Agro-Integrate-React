import { Box } from '@material-ui/core';

export function SlideContent({ children, textAlign, mode }) {
  return (
    <Box
      sx={{
        zIndex: 1,
        position: 'relative',
        // Add typography styles here
        '& > p': {
          maxWidth: 470,
          margin: textAlign === 'center' ? 'auto' : 'initial',
        },
        '& > *': {
          color: mode === 'light' ? 'white' : 'initial',
        },
      }}
    >
      {children}
    </Box>
  );
}
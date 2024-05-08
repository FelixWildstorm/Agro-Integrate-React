import { Box } from '@material-ui/core';

export function SliderThumb({ children, className }) {
  return (
    <Box
      sx={{
        '&:not(.style-2) img': {
          height: { md: 250 },
          width: { sm: 300 },
          marginBottom: { sm: 10 },
        },
        '&.style-2 img': {
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          objectPosition: 'center',
          animation: 'none !important',
        },
      }}
    >
      {children}
    </Box>
  );
}
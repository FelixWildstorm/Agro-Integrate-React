import { Typography } from '@material-ui/core';

export function SlideTitle({ children }) {
  return (
    <Typography
      variant="h2"
      sx={{
        fontSize: {
          xs: 32, 
          md: 50, 
          lg: 72, 
        },
        marginBottom: 10,
        fontWeight: 700,
      }}
    >
      {children}
    </Typography>
  );
}
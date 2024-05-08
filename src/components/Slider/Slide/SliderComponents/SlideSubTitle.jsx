import { Typography } from '@material-ui/core';

export function SlideSubTitle({ children }) {
  return (
    <Typography
      variant="h4"
      sx={{
        fontSize: 24,
        lineHeight: '1',
        color: 'text.primary',
        fontWeight: 600,
      }}
    >
      {children}
    </Typography>
  );
}
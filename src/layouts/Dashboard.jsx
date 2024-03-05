import React from "react";
import { Typography, Box, Container, Stack } from "@mui/material";

export default function Dashboard() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={4}>
          <Stack
            direction="row"
            spacing={3}
          >
            <Typography variant="body2" align="center">
              Dashboard
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
import React from "react";
import "../css/app.css";
import { Box, Container, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { RippleBadge } from "./MaterialTheme/styled";

function App() {
  return <Container sx={{ background: "orange" }}>
    <Stack direction={'column'}>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component={"h4"}>
          Initial Setup for SPA
        </Typography>
      </Box>
      <Box>
        <RippleBadge badgeContent={4}>
          <Button variant="contained">Contained</Button>

        </RippleBadge>
      </Box>
    </Stack>
  </Container>
}

export default App;






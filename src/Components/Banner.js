import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import logo from "../Components/logo.png";

export default function Banner() {
  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        backgroundColor: '#C9E5EF',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Calistoga', // Ensure the font name matches exactly what's loaded
              }}
            >
              Edusys
            </Typography>
          </Box>
  
        </Stack>
      </Container>
    </Box>
  );
}
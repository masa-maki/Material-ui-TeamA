'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0288d1',
    },
    secondary: {
      main: '#ff9100',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: { fontSize: '2.6rem', textAlign:"center" },
    h2: { fontSize: '1.6rem' },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        sx: {
          width: { xs: '100%', flexShrink: 1 },
          textAlign: 'center',
          py: 2,
          px: 2,
          m: 2,
          borderRadius: 1,
          fontSize: '1.4rem',
          // bgcolor: '#0288d1',
          // color: '#ffffff',
        },
        elevation: 1,
      },
    },
  },

  // components: {
  //   MuiAlert: {
  //     styleOverrides: {
  //       root: ({ ownerState }) => ({
  //         ...(ownerState.severity === 'info' && {
  //           backgroundColor: '#60a5fa',
  //         }),
  //       }),
  //     },
  //   },
  // },
});

export default theme;

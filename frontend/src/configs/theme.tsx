import { Comfortaa } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const font = Comfortaa({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

function theme(props: any) {
  const {isLight} = props

  return createTheme({
    palette: {
      mode: isLight ? 'light' : 'dark',
      primary: {
        main: isLight ? '#24A19C' :'#8443d3',
      },
      secondary: {
        main: '#6c757d',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: isLight ? '#F9F9F9' : '#121212'
      }
    },
    typography: {
      fontFamily: font.style.fontFamily,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: "#6b6b6b #2b2b2b",
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: isLight ? '#F9F9F9' : '#2b2b2b',
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              backgroundColor: "#6b6b6b",
              minHeight: 24,
              border: `3px solid ${isLight ? 'white' : '#2b2b2b'}`,
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
              backgroundColor: "#959595",
            },
            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
              backgroundColor: "#959595",
            },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#959595",
            },
            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
              backgroundColor: "#2b2b2b",
            },
          },
        },
      },
    },
  });
}

export default theme;
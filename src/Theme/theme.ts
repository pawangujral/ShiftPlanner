import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

export const defaultTheme = createTheme({
    palette: {
      primary: {
        main: blue[600],
      },
      // mode: prefersDarkMode ? "dark" : "light", // TODO
    },
  });
    

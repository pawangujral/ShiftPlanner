import _ from 'lodash';
import { createTheme } from '@mui/material/styles';
import type {ThemeOptions} from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const defaultTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: blue[600],
    },
    // mode: prefersDarkMode ? "dark" : "light", // TODO
  },
}

export function themeCreator(CustomTheme?: ThemeOptions) {
  if(!CustomTheme){
    return createTheme(defaultTheme);
  }
  else {
    return createTheme(_.merge(defaultTheme, CustomTheme));
  }
}




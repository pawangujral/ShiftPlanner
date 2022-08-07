import _ from 'lodash';
import { createTheme } from '@mui/material/styles';
import type {ThemeOptions} from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const getDesignTokens = (mode: 'dark' | 'light') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          secondary: {
            main: '#FFBA00',
          },
          common: {
            white: '#fefefe'
          }
        }
      : {
          primary: {
            main: blue[500],
          },
          secondary: {
            main: '#FFBA00',
          },

          common: {
            white: 'rgba(255, 255, 255, 0.16)'
          }
        }),
  },
});


export function themeCreator(CustomTheme?: ThemeOptions) {
  if(!CustomTheme){
    return createTheme(getDesignTokens('light'), ['light']);
  }
  else {
    // return createTheme(_.merge(defaultTheme, CustomTheme));
  }
}




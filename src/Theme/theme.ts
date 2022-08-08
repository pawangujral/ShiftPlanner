import _ from 'lodash';
import { createTheme } from '@mui/material/styles';
import type {ThemeOptions} from '@mui/material/styles';

const getDesignTokens = (mode: 'dark' | 'light') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#FF5134'
          },
          common: {
            white: 'rgb(252, 252, 252)'
          }
        }
      : {
          common: {
            white: 'rgba(255, 255, 255, 0.16)'
          }
        }),
  },
});


export function themeCreator(CustomTheme?: ThemeOptions, darks?: boolean) {
  const mode = darks ? 'dark' : 'light';
  if(!CustomTheme){
    return createTheme(getDesignTokens(mode), [mode]);
  }
  else {
    return createTheme(_.merge(getDesignTokens(mode), CustomTheme));
  }
}




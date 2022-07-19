import * as React from 'react';
import _ from 'lodash';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Planner from './Modules/Planner';
import Mayday from './Components/Mayday';
import { IPlanner } from './Utils';

interface IProps {
  plan: IPlanner | null | undefined;
}

function ShiftPlanner({ plan }: IProps): JSX.Element {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          // mode: prefersDarkMode ? "dark" : "light", // TODO
        },
      }),
    []
  );

  if (!plan || _.isEmpty(plan)) {
    return <Mayday />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Planner data={plan} />
    </ThemeProvider>
  );
}

export default ShiftPlanner;

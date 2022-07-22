import * as React from 'react';
import _ from 'lodash';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Planner from './Modules/Planner';
import Mayday from './Components/Mayday';
import { IPlanner, IShiftPlannerProps } from './Utils';

interface IProps extends Omit<IShiftPlannerProps, 'plan'> {
  plan: IPlanner | null | undefined;
}

function ShiftPlanner({
  plan,
  actions,
  handleAssigneeClick,
  handlePrevDateClick,
  handleNextDateClick,
}: IProps): JSX.Element {
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
      <Planner
        plan={plan}
        actions={actions}
        handleAssigneeClick={handleAssigneeClick}
        handlePrevDateClick={handlePrevDateClick}
        handleNextDateClick={handleNextDateClick}
      />
    </ThemeProvider>
  );
}

export default ShiftPlanner;

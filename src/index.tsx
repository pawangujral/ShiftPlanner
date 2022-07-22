import * as React from 'react';
import _ from 'lodash';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from './Theme';
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
  if (!plan || _.isEmpty(plan)) {
    return <Mayday />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
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

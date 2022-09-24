import * as React from 'react';
import _ from 'lodash';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { themeCreator } from './Theme';
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
  config,
  theme,
  dark = false,
  filterOptions,
  handleFilterClick,
}: IProps): JSX.Element {
  if (!plan || _.isEmpty(plan)) {
    return <Mayday />;
  }

  return (
    <ThemeProvider theme={themeCreator(theme, dark)}>
      <CssBaseline />
      <Planner
        plan={plan}
        actions={actions}
        handleAssigneeClick={handleAssigneeClick}
        handlePrevDateClick={handlePrevDateClick}
        handleNextDateClick={handleNextDateClick}
        config={config}
        filterOptions={filterOptions}
        handleFilterClick={handleFilterClick}
      />
    </ThemeProvider>
  );
}

export default ShiftPlanner;

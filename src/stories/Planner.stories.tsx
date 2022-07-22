import * as React from 'react';

import ShiftPlanner from '../index';

import {
  mockServer,
  mockActions,
  handleUserClick,
  handleDateChange,
} from '../Mocks/MockData';

export default {
  title: 'Shift Planner',
  component: ShiftPlanner,
};

const Template = (args: any) => <ShiftPlanner {...args} />;

export const Default = Template.bind({});

Default.args = {
  plan: mockServer(),
  shiftActions: mockActions(),
  taskActions: mockActions(),
  onAssigneeClick: handleUserClick,
  onPrevDateClick: handleDateChange,
  onNextDateClick: handleDateChange,
};

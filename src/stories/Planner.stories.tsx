import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IShiftPlannerProps } from 'src/Utils';

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
  args: {},
} as ComponentMeta<typeof ShiftPlanner>;

const Template: ComponentStory<typeof ShiftPlanner> = (
  args: IShiftPlannerProps
) => <ShiftPlanner {...args} />;

export const Default = Template.bind({});
export const WithActions = Template.bind({});
export const WithDateChange = Template.bind({});
export const NoData = Template.bind({});

Default.args = {
  plan: mockServer(),
};

WithActions.args = {
  plan: mockServer(),
  actions: {
    shift: mockActions(),
    task: mockActions(),
  },
  handleAssigneeClick: handleUserClick,
};

WithDateChange.args = {
  plan: mockServer(),
  handlePrevDateClick: handleDateChange,
  handleNextDateClick: handleDateChange,
};

NoData.args = {};

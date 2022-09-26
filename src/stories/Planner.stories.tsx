import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IShiftPlannerProps } from 'src/Utils';

import ShiftPlanner from '../index';

import {
  mockServer,
  mockActions,
  handleUserClick,
  handleDateChange,
  mockFilters,
  handleFilterValue,
} from '../Mocks/MockData';

export default {
  title: 'Package/Shift Planner',
  component: ShiftPlanner,
  args: {
    dark: false,
  },
  parameters: {
    controls: {
      exclude: [
        'plan',
        'actions',
        'handleAssigneeClick',
        'handlePrevDateClick',
        'handleNextDateClick',
        'config',
        'theme',
        'filterOptions',
        'handleFilterClick',
      ],
    },
  },
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
  actions: {
    shift: mockActions(),
    task: mockActions(),
    block: mockActions(),
  },
  handleAssigneeClick: handleUserClick,
  filterByOptions: mockFilters(),
  handleFilterValue: handleFilterValue,
};

WithActions.args = {
  plan: mockServer(),
  actions: {
    shift: mockActions(),
    task: mockActions(),
    block: mockActions(),
  },
  handleAssigneeClick: handleUserClick,
};

WithDateChange.args = {
  plan: mockServer(),
  handlePrevDateClick: handleDateChange,
  handleNextDateClick: handleDateChange,
};

NoData.args = {};

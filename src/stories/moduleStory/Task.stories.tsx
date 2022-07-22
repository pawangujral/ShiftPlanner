import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../../Theme';
import Task from '../../Modules/Task';
import type { IProps } from '../../Modules/Task';
import { DEFAULT_STATE } from '../../Config';
import { mockTask, handleUserClick, mockActions } from '../../Mocks/MockData';

export default {
  title: 'Module/ Task Module',
  component: Task,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Task>;

const TaskTemplate: ComponentStory<typeof Task> = (args: IProps) => (
  <Task {...args} />
);

export const TaskModule = TaskTemplate.bind({});

TaskModule.args = {
  data: mockTask()[0],
  unit: DEFAULT_STATE.default,
  actions: { task: mockActions() },
  isHover: false,
  handleMouseEnter: () => {},
  handleMouseLeave: () => {},
  handleAssigneeClick: handleUserClick,
};

import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { themeCreator } from '../../Theme';
import Group from '../../Modules/Group';
import type { IProps } from '../../Modules/Group';
import { DEFAULT_STATE } from '../../Config';
import { mockGroup, handleUserClick, mockActions } from '../../Mocks/MockData';

export default {
  title: 'Module/ Group Module',
  component: Group,
  decorators: [
    (Story) => (
      <ThemeProvider theme={themeCreator()}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Group>;

const GroupTemplate: ComponentStory<typeof Group> = (args: IProps) => (
  <Group {...args} />
);

export const GroupModule = GroupTemplate.bind({});

GroupModule.args = {
  data: mockGroup(),
  unit: DEFAULT_STATE.zoom.default,
  actions: { task: mockActions() },
  handleAssigneeClick: handleUserClick,
};

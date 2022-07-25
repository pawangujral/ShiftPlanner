import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../../Theme';
import Shift from '../../Modules/Shift';
import type { IProps } from '../../Modules/Shift';
import { DEFAULT_STATE } from '../../Config';
import { mockGroup, handleUserClick, mockActions } from '../../Mocks/MockData';

export default {
  title: 'Module/ Shift Module',
  component: Shift,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Shift>;

const ShiftTemplate: ComponentStory<typeof Shift> = (args: IProps) => (
  <Shift {...args} />
);

export const ShiftModule = ShiftTemplate.bind({});

ShiftModule.args = {
  data: mockGroup(),
  unit: DEFAULT_STATE.zoom.default,
  actions: { task: mockActions() },
  handleAssigneeClick: handleUserClick,
};

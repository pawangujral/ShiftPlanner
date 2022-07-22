import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../../Theme';
import Mayday from '../../Components/Mayday';
import type { IProps } from '../../Components/Mayday';

export default {
  title: 'Component / Mayday Component',
  component: Mayday,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Mayday>;

const MaydayTemplate: ComponentStory<typeof Mayday> = (args: IProps) => (
  <Mayday {...args} />
);

export const MaydayComponent = MaydayTemplate.bind({});

MaydayComponent.args = {
  message: 'Mayday',
};

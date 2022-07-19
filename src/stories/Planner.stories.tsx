import * as React from 'react';

import ShiftPlanner from '../index';

// import { mockServer } from '../Mocks/MockData';
import { DummyData } from '../Mocks/converter';

export default {
  title: 'Shift Planner',
  component: ShiftPlanner,
};

const Template = (args) => <ShiftPlanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  plan: DummyData,
};

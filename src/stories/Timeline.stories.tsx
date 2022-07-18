import * as React from 'react'

import Timeline from './../index'

import { mockServer } from './../Mocks/MockData'

export default {
  title: 'Scheduler',
  component: Timeline,
}

const Template = (args) => <Timeline {...args} />

export const Default = Template.bind({})
Default.args = {
  data: mockServer(),
}

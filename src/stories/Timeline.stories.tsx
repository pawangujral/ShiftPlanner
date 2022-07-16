import * as React from 'react'

import Timeline from './../index'

import { data } from './../Mocks/schedule'

export default {
  title: 'Scheduler',
  component: Timeline,
}

const Template = (args) => <Timeline {...args} />

export const Default = Template.bind({})
Default.args = {
  collection: data,
}

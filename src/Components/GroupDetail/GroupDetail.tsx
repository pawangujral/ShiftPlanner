import * as React from 'react'
import _ from 'lodash'
import { Container, Title, Info } from './GroupDetail.style'
import { CALCULATE_DURATION, FORMAT_DURATION } from './../../Utils'
import type { ITask } from './../../Utils'
import Paper from '@mui/material/Paper'
import Users from '../Users'

export interface IProps {
  data: ITask[]
}

const GroupDetail = ({ data }: IProps) => {
  return (
    <Container>
      <h3>Tasks</h3>
      {data.map(({ id, name, startTime, endTime, assignee = [] }) => {
        const duration = CALCULATE_DURATION(startTime, endTime)
        return (
          <Paper key={id} sx={{ mb: 2, p: 2 }} elevation={3}>
            <Title>{name}</Title>
            <Info>{FORMAT_DURATION(duration)}</Info>
            {!_.isEmpty(assignee) && (
              <Users data={assignee} max={assignee.length} />
            )}
          </Paper>
        )
      })}
    </Container>
  )
}

export default GroupDetail

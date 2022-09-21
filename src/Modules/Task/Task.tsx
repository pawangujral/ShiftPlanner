import * as React from 'react';
import _ from 'lodash';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import Stack from '@mui/material/Stack';
import Users from '../../Components/Users';
import TaskMenu from './TaskMenu';
import { generateRandomColor } from './../../Utils';

import {
  CALCULATE_WIDTH,
  FORMAT_DURATION,
  CALCULATE_DURATION,
} from '../../Utils';
import { Container, Title, Info, InfoBox } from './Task.style';
import type { ITask, IPlanActions } from '../../Utils';
export interface IProps {
  data: ITask;
  unit: number;
  isHover: boolean;
  actions?: IPlanActions;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  handleAssigneeClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

function Task({
  data,
  unit,
  isHover,
  actions,
  handleAssigneeClick,
}: IProps): JSX.Element {
  const {
    id: taskId,
    name,
    assignee = [],
    startTime,
    endTime,
    isActionEnabled = true,
  } = data;
  const duration = CALCULATE_DURATION(startTime, endTime);

  return (
    <>
      <Container
        key={taskId}
        width={CALCULATE_WIDTH(duration, unit)}
        padding={CALCULATE_WIDTH(duration, unit)}
        data-type={taskId}
        color={generateRandomColor(50)}
        data-hover={isHover}
        square
        elevation={0}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <InfoBox>
            <Title>{_.upperFirst(name)}</Title>
            <Info>
              <AlarmOnIcon sx={{ fontSize: 'inherit' }} />
              {FORMAT_DURATION(duration)}
            </Info>
          </InfoBox>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {!_.isEmpty(assignee) && (
              <Users
                data={assignee}
                handleAssigneeClick={handleAssigneeClick}
              />
            )}

            <TaskMenu
              taskId={taskId}
              actions={actions}
              isActionEnabled={isActionEnabled}
            />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default React.memo(Task);

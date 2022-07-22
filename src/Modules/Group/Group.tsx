import * as React from 'react';
import _ from 'lodash';
import Task from '../Task';
import GroupDetail from './../../Components/GroupDetail';

import {
  FORMAT_DURATION,
  CALCULATE_WIDTH,
  CALCULATE_BLOCK_POSITION,
  CALCULATE_DURATION,
} from '../../Utils';

import { Container, Title } from './Group.style';
import Drawer from '@mui/material/Drawer';

import type { ITask, IGroup, IAction } from '../../Utils';

export interface IProps {
  data: IGroup;
  unit: number;
  actions: IAction[];
  handleAssigneeClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Group = ({
  data,
  unit,
  actions,
  handleAssigneeClick,
}: IProps): JSX.Element => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const { id, startTime, endTime, tasks = [], name } = data;
  const duration = CALCULATE_DURATION(startTime, endTime);
  const [isHovering, setHovering] = React.useState<boolean>(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  const handleGroupClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOpen(true);
  };

  return (
    <React.Fragment>
      <Container
        width={CALCULATE_WIDTH(duration, unit)}
        left={CALCULATE_BLOCK_POSITION(startTime, unit)}
        key={id}
      >
        <Title onClick={handleGroupClick}>
          <span>{name && _.upperFirst(name)}</span>
          <em>{FORMAT_DURATION(duration)}</em>
        </Title>

        {!_.isEmpty(tasks) &&
          tasks.map((task: ITask) => (
            <Task
              key={task.id}
              data={task}
              unit={unit}
              isHover={isHovering}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              actions={actions}
              handleAssigneeClick={handleAssigneeClick}
            />
          ))}
      </Container>
      <Drawer anchor="right" open={isOpen} onClose={() => setOpen(false)}>
        <GroupDetail data={tasks} />
      </Drawer>
    </React.Fragment>
  );
};

export default Group;

import * as React from 'react';
import _ from 'lodash';
import Task from '../Task';

import {
  CALCULATE_WIDTH,
  CALCULATE_BLOCK_POSITION,
  CALCULATE_DURATION,
} from '../../Utils';

import { Container } from './Group.style';
import GroupContainer from './GroupContainer';
import type { ITask, IGroup, IPlanActions } from '../../Utils';
export interface IProps {
  data: IGroup;
  unit: number;
  actions?: IPlanActions;
  handleAssigneeClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Group = ({
  data,
  unit,
  actions,
  handleAssigneeClick,
}: IProps): JSX.Element => {
  const { id, tasks, name } = data;
  const duration = CALCULATE_DURATION(
    tasks[0].startTime,
    tasks[tasks.length - 1].endTime
  );
  const [isHovering, setHovering] = React.useState<boolean>(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <React.Fragment>
      <Container
        width={CALCULATE_WIDTH(duration, unit)}
        left={CALCULATE_BLOCK_POSITION(tasks[0].startTime, unit)}
        key={id}
      >
        <GroupContainer
          tasks={tasks}
          name={name}
          duration={duration}
          actions={actions}
        />

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
    </React.Fragment>
  );
};

export default Group;

import * as React from "react";
import _ from "lodash";
import Task from "../Task";
import GroupDetail from "./../../Components/GroupDetail";

import {
  FORMAT_DURATION,
  CALCULATE_TIMELINE_BOX_WIDTH,
  CALCULATE_BLOCK_POSITION,
  CALCULATE_DURATION,
} from "../../Utils";

import { Container, Title } from "./Group.style";
import Drawer from "@mui/material/Drawer";

import type { ITask, IGroup } from "../../Utils";

export interface IProps {
  data: IGroup;
  unit: number;
}

const Group = ({ data, unit }: IProps): JSX.Element => {
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

  const handleGroupClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setOpen(true);
  };

  return (
    <React.Fragment>
      <Container
        width={CALCULATE_TIMELINE_BOX_WIDTH(duration, unit)}
        left={CALCULATE_BLOCK_POSITION(startTime, unit)}
        key={id}
      >
        <Title onClick={handleGroupClick}>
          {name
            ? `${name}: ${FORMAT_DURATION(duration)}`
            : FORMAT_DURATION(duration)}
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

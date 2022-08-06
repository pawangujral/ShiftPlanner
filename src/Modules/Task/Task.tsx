import * as React from 'react';
import _ from 'lodash';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import Stack from '@mui/material/Stack';
import Users from '../../Components/Users';

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
  actions: IPlanActions;
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
    color,
    assignee = [],
    startTime,
    endTime,
    isActionEnabled = true,
  } = data;
  const duration = CALCULATE_DURATION(startTime, endTime);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openMenu = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Container
        key={taskId}
        width={CALCULATE_WIDTH(duration, unit)}
        padding={CALCULATE_WIDTH(duration, unit)}
        data-type={taskId}
        color={color}
        data-hover={isHover}
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

            <IconButton
              aria-label="Open actions"
              component="label"
              aria-controls={openMenu ? taskId : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? 'true' : undefined}
              onClick={handleClick}
              size="small"
            >
              <MoreVertIcon sx={{ fontSize: 17, color: '#2d3843' }} />
            </IconButton>
          </Stack>
        </Stack>
      </Container>

      <Menu
        id={taskId}
        aria-labelledby={taskId}
        anchorEl={anchorEl}
        open={
          openMenu && actions && !_.isEmpty(actions.task) && isActionEnabled
        }
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {actions &&
          !_.isEmpty(actions) &&
          actions.task.map(({ text, onClick: handleActionClick }, index) => (
            <MenuItem
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                handleActionClick(event);
                handleClose();
              }}
              key={index}
              data-id={taskId}
              dense
            >
              {_.upperFirst(text)}
            </MenuItem>
          ))}
      </Menu>
    </>
  );
}

export default Task;

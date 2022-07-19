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
import type { ITask } from '../../Utils';

export interface IProps {
  data: ITask;
  unit: number;
  isHover: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

function Task({
  data,
  unit,
  isHover,
  handleMouseEnter,
  handleMouseLeave,
}: IProps): JSX.Element {
  const { id, name, color, assignee = [], actions, startTime, endTime } = data;
  const duration = CALCULATE_DURATION(startTime, endTime);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openMenu = Boolean(anchorEl);

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <Container
        key={id}
        width={CALCULATE_WIDTH(duration, unit)}
        padding={CALCULATE_WIDTH(duration, unit)}
        data-type={id}
        color={color}
        data-hover={isHover}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
            {!_.isEmpty(assignee) && <Users data={assignee} />}

            <IconButton
              aria-label="Open actions"
              component="label"
              aria-controls={openMenu ? id : undefined}
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
        id={id}
        aria-labelledby={id}
        anchorEl={anchorEl}
        open={openMenu}
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
        {actions?.map(({ text, onClick: handleActionClick }, index) => (
          <MenuItem onClick={handleActionClick} key={index} dense>
            {_.upperFirst(text)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default React.memo(Task);

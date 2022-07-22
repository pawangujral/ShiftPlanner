import * as React from 'react';
import _ from 'lodash';
import { CALCULATE_DURATION, FORMAT_DURATION } from '../../../Utils';
import type { IShift, IAction } from '../../../Utils';
import { TotalTime } from './ShiftInfo.style';
import { AsideBlock, AsideItem, Name } from '../Aside.style';
import Users from '../../Users';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface IProps {
  data: IShift;
  size: number;
  actions: IAction[];
  handleAssigneeClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const ShiftInfo = ({ data, size, actions, handleAssigneeClick }: IProps) => {
  const {
    id: shiftId,
    name,
    assignee,
    startTime,
    endTime,
    isActionEnabled = true,
  } = data;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openMenu = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AsideBlock height={size} key={shiftId}>
        <AsideItem>
          <Name>{_.upperFirst(name)}</Name>
          {assignee && !_.isEmpty(assignee) ? (
            <Users
              data={assignee}
              size={18}
              handleAssigneeClick={handleAssigneeClick}
            />
          ) : (
            <TotalTime>
              <AlarmOnIcon sx={{ fontSize: 'inherit' }} />{' '}
              {FORMAT_DURATION(CALCULATE_DURATION(startTime, endTime))}
            </TotalTime>
          )}
        </AsideItem>

        <IconButton
          aria-label="Open actions"
          component="label"
          aria-controls={openMenu ? shiftId : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? 'true' : undefined}
          onClick={handleClick}
          size="small"
        >
          <MoreVertIcon sx={{ fontSize: 17, color: '#2d3843' }} />
        </IconButton>
      </AsideBlock>

      <Menu
        id={shiftId}
        aria-labelledby={shiftId}
        anchorEl={anchorEl}
        open={openMenu && !_.isEmpty(actions) && isActionEnabled}
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
        {actions?.map(({ text, onClick: handleActionClick }, index) => {
          return (
            <MenuItem
              onClick={handleActionClick}
              key={index}
              data-id={shiftId}
              dense
            >
              {_.upperFirst(text)}
            </MenuItem>
          );
        })}
      </Menu>
    </React.Fragment>
  );
};

export default ShiftInfo;

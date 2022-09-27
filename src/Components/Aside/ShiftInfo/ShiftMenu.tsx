import * as React from 'react';
import _ from 'lodash';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import type { IPlanActions } from '../../../Utils';

export interface IProps {
  shiftId: string;
  isActionEnabled: boolean;
  actions?: IPlanActions;
}

const ShiftMenu = ({
  shiftId,
  actions,
  isActionEnabled,
}: IProps): JSX.Element | null => {
  if (!actions?.shift) {
    return null;
  }

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

      <Menu
        id={shiftId}
        aria-labelledby={shiftId}
        anchorEl={anchorEl}
        open={openMenu && !!actions && !_.isEmpty(actions) && isActionEnabled}
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
          actions.shift.map(({ text, onClick: handleActionClick }, index) => {
            return (
              <MenuItem
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  handleActionClick(event);
                  handleClose();
                }}
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

export default ShiftMenu;

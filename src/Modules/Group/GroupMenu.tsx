import * as React from 'react';
import _ from 'lodash';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import type { IPlanActions } from '../../Utils';

export interface IProps {
  blockId: string;
  actions?: IPlanActions;
  isActionEnabled: boolean;
}

const GroupMenu = ({
  blockId,
  actions,
  isActionEnabled,
}: IProps): JSX.Element | null => {
  if (!actions?.block) {
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
        aria-controls={openMenu ? blockId : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? 'true' : undefined}
        onClick={handleClick}
        size="small"
        sx={{ padding: 0 }}
      >
        <MoreHorizIcon sx={{ fontSize: 17, color: '#2d3843' }} />
      </IconButton>

      <Menu
        id={blockId}
        aria-labelledby={blockId}
        anchorEl={anchorEl}
        open={
          openMenu && !!actions && !_.isEmpty(actions.task) && isActionEnabled
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
              data-id={blockId}
              dense
            >
              {_.upperFirst(text)}
            </MenuItem>
          ))}
      </Menu>
    </React.Fragment>
  );
};

export default GroupMenu;

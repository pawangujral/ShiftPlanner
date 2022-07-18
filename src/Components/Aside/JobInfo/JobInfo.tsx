import * as React from "react";
import * as _ from "lodash";
import type { ISchedule } from "./../../../Utils";
import { AsideBlock, AsideItem, Name } from "./../Aside.style";
import Users from "./../../../Components/Users";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface IProps {
  collection: ISchedule;
  size: number;
}

const JobInfo = ({ collection, size }: IProps) => {
  const { id, name, assignee, actions } = collection;
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
      <AsideBlock height={size} key={id}>
        <AsideItem>
          <Name>{name}</Name>
          {assignee && !_.isEmpty(assignee) && (
            <Users collection={assignee} size={18} />
          )}
        </AsideItem>

        <IconButton
          aria-label="Open actions"
          component="label"
          aria-controls={openMenu ? id : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={handleClick}
          size="small"
        >
          <MoreVertIcon sx={{ fontSize: 17, color: "#2d3843" }} />
        </IconButton>
      </AsideBlock>

      <Menu
        id={id}
        aria-labelledby={id}
        anchorEl={anchorEl}
        open={openMenu && !_.isEmpty(actions)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {actions?.map(({ text, onClick: handleActionClick }, index) => {
          return (
            <MenuItem onClick={handleActionClick} key={index} dense>
              {text}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default JobInfo;

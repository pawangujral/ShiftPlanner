import * as React from "react";

import Users from "./../../Components/Users";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import Stack from "@mui/material/Stack";

import { CALCULATE_TIMELINE_BOX_WIDTH, FORMAT_DURATION } from "./../../Utils";
import { AssignmentContainer, Title, Info } from "./Assignment.style";
import type { IAssignment } from "./../../Utils";

export interface IProps {
  collection: IAssignment;
  unit: number;
  className: string;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const Assignment = ({
  collection,
  unit,
  className,
  handleMouseEnter,
  handleMouseLeave,
}: IProps): JSX.Element => {
  const { id, title, duration, color, assignee = [], actions } = collection;
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
      <AssignmentContainer
        key={id}
        width={CALCULATE_TIMELINE_BOX_WIDTH(duration, unit)}
        padding={CALCULATE_TIMELINE_BOX_WIDTH(duration, unit)}
        data-type={id}
        color={color}
        data-class={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <div>
            <Title>{title}</Title>
            <Info>
              <AlarmOnIcon sx={{ fontSize: "inherit" }} />
              {FORMAT_DURATION(duration)}
            </Info>
          </div>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {!!assignee.length && <Users collection={assignee} />}

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
          </Stack>
        </Stack>
      </AssignmentContainer>

      <Menu
        id={id}
        aria-labelledby={id}
        anchorEl={anchorEl}
        open={openMenu}
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

export default React.memo(Assignment);

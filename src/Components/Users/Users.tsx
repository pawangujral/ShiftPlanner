import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { IAssignee } from "./../../Utils";
import { AvatarGroupContainer, Name, Description } from "./Users.style";

export interface IProps {
  data: IAssignee[];
  size?: number;
}

const Users = ({ data, size = 24 }: IProps): JSX.Element => {
  return (
    <AvatarGroupContainer
      sx={{
        "& .MuiAvatar-root": { width: size, height: size, fontSize: 10 },
      }}
    >
      {data.map(({ id, name, image, description, onClick: handleClick }) => {
        return (
          <Tooltip
            title={
              <span>
                <Name>{name}</Name>
                <Description>{description}</Description>
              </span>
            }
            placement="top"
            key={id}
            arrow
          >
            <Avatar
              alt={name}
              src={image}
              sx={{ width: size, height: size }}
              onClick={handleClick}
            />
          </Tooltip>
        );
      })}
    </AvatarGroupContainer>
  );
};

export default Users;

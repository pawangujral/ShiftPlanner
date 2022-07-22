import * as React from 'react';
import _ from 'lodash';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import type { IAssignee } from './../../Utils';
import { AvatarGroupContainer, Name, Description } from './Users.style';

export interface IProps {
  data: IAssignee[];
  size?: number;
  max?: number;
  handleAssigneeClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Users = ({
  data,
  size = 24,
  max = 5,
  handleAssigneeClick,
}: IProps): JSX.Element => {
  const renderToolTipContent = (
    name: string | undefined,
    description: string | undefined
  ) => {
    if (
      (name && _.trim(name).length) ||
      (description && _.trim(description).length)
    ) {
      return (
        <span>
          <Name>{_.upperFirst(name)}</Name>
          <Description>{_.upperFirst(description)}</Description>
        </span>
      );
    }

    return '';
  };
  return (
    <AvatarGroupContainer
      sx={{
        '& .MuiAvatar-root': { width: size, height: size, fontSize: 10 },
      }}
      max={max}
    >
      {data.map(({ id, name, image, description }) => {
        return (
          <Tooltip
            title={renderToolTipContent(name, description)}
            placement="top"
            key={id}
            arrow
          >
            <Avatar
              alt={name}
              src={image}
              sx={{ width: size, height: size }}
              data-id={id}
              onClick={(event: React.MouseEvent<HTMLElement>) =>
                handleAssigneeClick ? handleAssigneeClick(event) : null
              }
            />
          </Tooltip>
        );
      })}
    </AvatarGroupContainer>
  );
};

export default Users;

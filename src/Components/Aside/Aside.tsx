import * as React from 'react';
import type { IShift, IAction } from './../../Utils';
import { Container } from './Aside.style';
import ShiftInfo from './ShiftInfo';

interface IProps {
  data: IShift[];
  size: number;
  actions: IAction[];
  handleAssigneeClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Aside = ({ data, size, actions, handleAssigneeClick }: IProps) => (
  <Container>
    {data.map((item) => (
      <ShiftInfo
        data={item}
        key={item.id}
        size={size}
        actions={actions}
        handleAssigneeClick={handleAssigneeClick}
      />
    ))}
  </Container>
);

export default Aside;

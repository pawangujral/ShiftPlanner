import * as React from 'react';
import type { IShift } from './../../Utils';
import { Container } from './Aside.style';
import ShiftInfo from './ShiftInfo';

interface IProps {
  data: IShift[];
  size: number;
}

const Aside = ({ data, size }: IProps) => (
  <Container>
    {data.map((item) => (
      <ShiftInfo data={item} key={item.id} size={size} />
    ))}
  </Container>
);

export default Aside;

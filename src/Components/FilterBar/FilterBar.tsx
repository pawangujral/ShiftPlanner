import * as React from 'react';
import { Container } from './FilterBar.style';

export interface IProps {
  children: React.ReactNode;
}

const FilterBar = ({ children }: IProps): JSX.Element => {
  return <Container>{children}</Container>;
};

export default FilterBar;

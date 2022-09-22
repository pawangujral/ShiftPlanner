import * as React from 'react';
import { Container } from './FilterBar.style';

import type { TFilterString } from './../../Utils';
import Grid from '@mui/material/Grid';
import SortFilter from './SortFilter';
import SearchFilter from './SearchFilter';

export interface IProps {
  handleFilterValue: (key: TFilterString, value: string) => void;
}

const FilterBar = ({ handleFilterValue }: IProps): JSX.Element => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <SearchFilter handleFilterValue={handleFilterValue} />
        </Grid>
        <Grid item xs={2}>
          <SortFilter handleFilterValue={handleFilterValue} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default FilterBar;

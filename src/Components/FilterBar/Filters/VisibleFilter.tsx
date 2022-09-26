import * as React from 'react';
import _ from 'lodash';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import type { TFilterState, TFilter } from './../../../Utils';
import { EFilterKey } from './../../../Utils';

export interface IProps {
  filterByOptions: TFilter[];
  VisibilityOptions: { [key: string]: boolean };
  handleFilterState: React.Dispatch<React.SetStateAction<TFilterState>>;
}

const VisibleFilter = ({
  VisibilityOptions,
  handleFilterState,
  filterByOptions,
}: IProps): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterState((prevState: TFilterState) => ({
      ...prevState,
      [EFilterKey.FILTERBY]: {
        ...(prevState[EFilterKey.FILTERBY] as any),
        [event.target.name]: event.target.checked,
      },
    }));
  };

  return (
    <FormGroup>
      <Typography variant="caption">Filter by:</Typography>
      {filterByOptions.map(({ text, value }) => {
        return (
          <FormControlLabel
            control={
              <Checkbox
                checked={VisibilityOptions[value]}
                name={value}
                onChange={handleChange}
              />
            }
            label={_.upperFirst(text)}
            key={value}
          />
        );
      })}
    </FormGroup>
  );
};

export default VisibleFilter;

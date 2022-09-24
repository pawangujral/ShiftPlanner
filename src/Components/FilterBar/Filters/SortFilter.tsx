import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import type { TFilterString, TFilter } from './../../../Utils';
import { EFilterKey } from './../../../Utils';
import Typography from '@mui/material/Typography';

export interface IProps {
  value: string;
  sortOptions: TFilter[];
  handleFilterValue: (
    key: TFilterString,
    value: string | { [key: string]: boolean }
  ) => void;
}

const SortFilter = ({
  sortOptions,
  handleFilterValue,
  value,
}: IProps): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterValue(
      [EFilterKey.SORTBY] as any,
      (event.target as HTMLInputElement).value
    );
  };

  return (
    <FormControl fullWidth size="small">
      <Typography variant="caption">Sort by:</Typography>
      <RadioGroup
        aria-labelledby="sort-by"
        name="sort-by"
        value={value}
        onChange={handleChange}
      >
        {sortOptions.map(({ text, value }) => (
          <FormControlLabel
            value={value}
            control={<Radio size="small" />}
            label={text}
            key={text}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default SortFilter;

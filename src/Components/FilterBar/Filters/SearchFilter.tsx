import * as React from 'react';
import TextField from '@mui/material/TextField';
import type { TFilterString } from './../../../Utils';
import { EFilterKey } from './../../../Utils';

export interface IProps {
  value: string;
  handleFilterValue: (
    key: TFilterString,
    value: string | { [key: string]: boolean }
  ) => void;
}

const SearchFilter = ({ value, handleFilterValue }: IProps): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterValue([EFilterKey.SEARCHBY] as any, event.target.value);
  };

  return (
    <TextField
      id="search"
      label="Search"
      variant="outlined"
      value={value}
      onChange={handleChange}
      size="small"
      fullWidth
    />
  );
};

export default SearchFilter;

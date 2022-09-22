import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import type { TFilterString } from './../../Utils';

export interface IProps {
  handleFilterValue: (key: TFilterString, value: string) => void;
}

const SortFilter = ({ handleFilterValue }: IProps): JSX.Element => {
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    handleFilterValue('SORTBY', value);
  }, [value]);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="sort-by">Sort</InputLabel>
      <Select
        labelId="sort-by"
        id="sort-by"
        value={value}
        label="SortBy"
        onChange={handleChange}
      >
        <MenuItem value={'name'}>Name</MenuItem>
        <MenuItem value={'startDate'}>Start Date</MenuItem>
        <MenuItem value={'endDate'}>End Date</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortFilter;

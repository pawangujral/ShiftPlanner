import * as React from 'react';
import TextField from '@mui/material/TextField';
import type { TFilterString } from './../../Utils';

export interface IProps {
  handleFilterValue: (key: TFilterString, value: string) => void;
}

const SearchFilter = ({ handleFilterValue }: IProps): JSX.Element => {
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    handleFilterValue('SEARCHBY', value);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
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

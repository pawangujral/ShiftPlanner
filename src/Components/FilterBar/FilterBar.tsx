import * as React from 'react';
import { Container } from './FilterBar.style';

import type {
  TFilterString,
  TFilterState,
  TFilterOptions,
} from './../../Utils';
import { EFilterKey } from './../../Utils';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SortFilter from './Filters/SortFilter';
import SearchFilter from './Filters/SearchFilter';
import VisibleFilter from './Filters/VisibleFilter';
import Divider from '@mui/material/Divider';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

export interface IProps {
  filterOptions: TFilterOptions;
  handleFilterValue: (values: TFilterState) => void;
  disabled: boolean;
}

const FilterBar = ({
  filterOptions,
  handleFilterValue,
  disabled,
}: IProps): JSX.Element => {
  const FIlTER_DEFAULT_VALUE = {
    [EFilterKey.SEARCHBY]: '',
  };

  if (filterOptions.sortByOptions) {
    FIlTER_DEFAULT_VALUE[EFilterKey.SORTBY] = '';
  }
  if (filterOptions.filterByOptions) {
    FIlTER_DEFAULT_VALUE[EFilterKey.FILTERBY] =
      filterOptions.filterByOptions.reduce(
        (previousValue, currentValue) => ({
          ...previousValue,
          [currentValue.value]: true,
        }),
        {}
      );
  }

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const open = Boolean(anchorEl);

  const [filterState, setFilterState] = React.useState(FIlTER_DEFAULT_VALUE);

  const handleFilterValueCombination = (
    key: TFilterString,
    value: string | { [key: string]: boolean }
  ) => {
    setFilterState({ ...filterState, [key]: value });
  };

  const handleFilterSubmit = () => {
    handleFilterValue(filterState);
  };

  const handleFilterReset = () => {
    setFilterState(FIlTER_DEFAULT_VALUE);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggleFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Tooltip title="Toggle filters" placement="top" arrow>
        <span>
          <IconButton
            size="small"
            color="inherit"
            onClick={handleToggleFilter}
            disabled={disabled}
          >
            <FilterAltIcon />
          </IconButton>
        </span>
      </Tooltip>

      <Popover
        id={'Filter-bar'}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{ padding: '10px' }}
      >
        <Container>
          <Stack
            direction="column"
            spacing={1}
            justifyContent="flex-start"
            alignItems="start"
          >
            <SearchFilter
              value={filterState[EFilterKey.SEARCHBY]}
              handleFilterValue={handleFilterValueCombination}
            />
            {filterOptions.sortByOptions && (
              <SortFilter
                value={filterState[EFilterKey.SORTBY]}
                handleFilterValue={handleFilterValueCombination}
                sortOptions={filterOptions.sortByOptions}
              />
            )}
            {filterOptions.filterByOptions && (
              <>
                <Divider component="div" sx={{ width: '100%' }} />
                <VisibleFilter
                  VisibilityOptions={filterState[EFilterKey.FILTERBY]}
                  handleFilterState={setFilterState}
                  filterByOptions={filterOptions.filterByOptions}
                />
              </>
            )}
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            mt={2}
          >
            <Button variant="outlined" onClick={handleFilterSubmit}>
              Apply
            </Button>
            <Button variant="text" onClick={handleFilterReset}>
              Clear
            </Button>
          </Stack>
        </Container>
      </Popover>
    </>
  );
};

export default FilterBar;

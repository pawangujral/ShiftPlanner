import * as React from 'react';
import moment from 'moment';
import { Current, Location } from './DateGroup.style';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import IconButton from '@mui/material/IconButton';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Stack from '@mui/material/Stack';
import { IMetaData } from './../../Utils';

export interface IProps {
  metaData: IMetaData;
  disabled: boolean;
  handlePrevDateChange?: (event: React.MouseEvent<HTMLElement>) => void;
  handleNextDateChange?: (event: React.MouseEvent<HTMLElement>) => void;
}

const DateGroup = ({
  metaData,
  disabled,
  handlePrevDateChange,
  handleNextDateChange,
}: IProps): JSX.Element => {
  console.log(handlePrevDateChange, handleNextDateChange);
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      {handlePrevDateChange && (
        <IconButton
          size="small"
          color="info"
          onClick={handlePrevDateChange}
          disabled={disabled}
        >
          <ArrowCircleLeftIcon />
        </IconButton>
      )}
      <Current>
        {moment(metaData?.currentDate).format('MMM Do YYYY')}
        {metaData?.location && (
          <Location>
            <FmdGoodIcon sx={{ fontSize: 'inherit' }} /> {metaData.location}
          </Location>
        )}
      </Current>
      {handleNextDateChange && (
        <IconButton
          size="small"
          color="info"
          onClick={handleNextDateChange}
          disabled={disabled}
        >
          <ArrowCircleRightIcon />
        </IconButton>
      )}
    </Stack>
  );
};

export default DateGroup;

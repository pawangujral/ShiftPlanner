import * as React from 'react';
import moment from 'moment';
import Tooltip from '@mui/material/Tooltip';
import { Current, Location } from './DateGroup.style';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import IconButton from '@mui/material/IconButton';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Stack from '@mui/material/Stack';
import { IMetaData } from './../../Utils';

export interface IProps {
  metaData: IMetaData;
  handlePrevDateChange?: (event: React.MouseEvent<HTMLElement>) => void;
  handleNextDateChange?: (event: React.MouseEvent<HTMLElement>) => void;
}

const DateGroup = ({
  metaData,
  handlePrevDateChange,
  handleNextDateChange,
}: IProps): JSX.Element => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      {handlePrevDateChange && (
        <Tooltip title="Previous Shift" placement="top" arrow>
          <span>
            <IconButton
              size="small"
              color="info"
              onClick={handlePrevDateChange}
              disabled={!handlePrevDateChange}
            >
              <ArrowCircleLeftIcon />
            </IconButton>
          </span>
        </Tooltip>
      )}
      <Current>
        {moment(metaData?.currentDate).format('MMM Do, YYYY')}
        {metaData?.location && (
          <Location>
            <FmdGoodIcon sx={{ fontSize: 'inherit' }} /> {metaData.location}
          </Location>
        )}
      </Current>
      {handleNextDateChange && (
        <Tooltip title="Next Shift" placement="top" arrow>
          <span>
            <IconButton
              size="small"
              color="info"
              onClick={handleNextDateChange}
              disabled={!handleNextDateChange}
            >
              <ArrowCircleRightIcon />
            </IconButton>
          </span>
        </Tooltip>
      )}
    </Stack>
  );
};

export default DateGroup;

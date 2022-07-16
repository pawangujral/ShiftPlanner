import * as React from 'react'
import moment from 'moment'
import { Current, Location } from './DateGroup.style'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { IMetaData } from './../../Utils'

export interface IProps {
  metadata: IMetaData
  disabled: boolean
}

const DateGroup = ({ metadata, disabled }: IProps): JSX.Element => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      {metadata.onPrevDateClick && (
        <IconButton
          size="small"
          color="info"
          onClick={metadata.onPrevDateClick}
          disabled={disabled}
        >
          <ArrowCircleLeftIcon />
        </IconButton>
      )}
      <Current>
        {moment(metadata.scheduled_date).format('MMM Do YYYY')}
        <Location>{metadata.location}</Location>
      </Current>
      {metadata.onNextDateClick && (
        <IconButton
          size="small"
          color="info"
          onClick={metadata.onNextDateClick}
          disabled={disabled}
        >
          <ArrowCircleRightIcon />
        </IconButton>
      )}
    </Stack>
  )
}

export default React.memo(DateGroup)

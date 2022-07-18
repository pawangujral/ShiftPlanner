import * as React from "react";
import { ISchedule } from "./../../../Utils";

import { InfoContainer, Title, InfoBlock } from "./PopupInfo.style";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { FORMAT_HOUR, FORMAT_DURATION } from "./../../../Utils";

export interface IProps {
  collection: ISchedule;
}

const AssignmentInfo = ({ collection }: IProps): JSX.Element => {
  const { startTime, endTime, duration } = collection;
  return (
    <InfoContainer>
      <Stack direction="row" spacing={4}>
        <InfoBlock>
          <Title>Duration</Title>
          <Chip
            label={FORMAT_DURATION(duration)}
            color="primary"
            variant="outlined"
            size="small"
          />
        </InfoBlock>
      </Stack>
      <Stack direction="row" spacing={2}>
        <InfoBlock>
          <Title>Start time</Title>
          <Chip
            label={FORMAT_HOUR(startTime)}
            color="success"
            variant="outlined"
            size="small"
          />
        </InfoBlock>

        <InfoBlock>
          <Title>End time</Title>
          <Chip
            label={FORMAT_HOUR(endTime)}
            color="error"
            variant="outlined"
            size="small"
          />
        </InfoBlock>
      </Stack>
    </InfoContainer>
  );
};

export default AssignmentInfo;

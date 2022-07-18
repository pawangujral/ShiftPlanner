import * as React from "react";
import { IShift } from "./../../../Utils";

import { InfoContainer, Title, InfoBlock } from "./PopupInfo.style";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import {
  FORMAT_HOUR,
  FORMAT_DURATION,
  CALCULATE_DURATION,
} from "./../../../Utils";

export interface IProps {
  data: IShift;
}

const AssignmentInfo = ({ data }: IProps): JSX.Element => {
  const { startTime, endTime } = data;
  const duration = CALCULATE_DURATION(startTime, endTime);
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

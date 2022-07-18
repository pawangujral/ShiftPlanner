import * as React from "react";
import moment from "moment";
import { Current, Location } from "./DateGroup.style";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import IconButton from "@mui/material/IconButton";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Stack from "@mui/material/Stack";
import { IMetaData } from "./../../Utils";

export interface IProps {
  metaData: IMetaData;
  disabled: boolean;
}

const DateGroup = ({ metaData, disabled }: IProps): JSX.Element => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      {metaData?.onPrevDateClick && (
        <IconButton
          size="small"
          color="info"
          onClick={metaData.onPrevDateClick}
          disabled={disabled}
        >
          <ArrowCircleLeftIcon />
        </IconButton>
      )}
      <Current>
        {moment(metaData?.scheduledDate).format("MMM Do YYYY")}
        {metaData?.location && (
          <Location>
            <FmdGoodIcon sx={{ fontSize: "inherit" }} /> {metaData.location}
          </Location>
        )}
      </Current>
      {metaData?.onNextDateClick && (
        <IconButton
          size="small"
          color="info"
          onClick={metaData.onNextDateClick}
          disabled={disabled}
        >
          <ArrowCircleRightIcon />
        </IconButton>
      )}
    </Stack>
  );
};

export default React.memo(DateGroup);

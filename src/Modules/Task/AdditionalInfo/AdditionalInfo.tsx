import * as React from "react";
import { ITask } from "../../../Utils";

import { Container } from "./AdditionalInfo.style";

import { FORMAT_HOUR } from "../../../Utils";

export interface IProps {
  data: ITask;
}

const AdditionalInfo = ({ data }: IProps): JSX.Element => {
  const { name, id, startTime, endTime, Icon, additionalInfo } = data;
  return (
    <Container>
      <span data-type={id}>
        <span>
          {Icon}
          <strong>{name}</strong>
        </span>
        <span>{`${FORMAT_HOUR(startTime)}–${FORMAT_HOUR(endTime)}`}</span>
        <span>{additionalInfo}</span>
      </span>
    </Container>
  );
};

export default AdditionalInfo;

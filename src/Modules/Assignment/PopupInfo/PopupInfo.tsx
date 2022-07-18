import * as React from "react";
import { IAssignment } from "./../../../Utils";

import { InfoContainer } from "./PopupInfo.style";

import { FORMAT_HOUR } from "./../../../Utils";

export interface IProps {
  collection: IAssignment;
}

const AssignmentInfo = ({ collection }: IProps): JSX.Element => {
  const { name, id, startTime, endTime, Icon, additionalInfo } = collection;
  return (
    <InfoContainer>
      <span data-type={id}>
        <span>
          {Icon}
          <strong>{name}</strong>
        </span>
        <span>{`${FORMAT_HOUR(startTime)}–${FORMAT_HOUR(endTime)}`}</span>
        <span>{additionalInfo}</span>
      </span>
    </InfoContainer>
  );
};

export default AssignmentInfo;

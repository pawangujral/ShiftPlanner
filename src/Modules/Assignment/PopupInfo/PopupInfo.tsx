import * as React from "react";
import { IAssignment } from "./../../../Utils";

import { InfoContainer } from "./PopupInfo.style";

import { FORMAT_HOUR } from "./../../../Utils";

export interface IProps {
  collection: IAssignment;
}

const AssignmentInfo = ({ collection }: IProps): JSX.Element => {
  const { title, id, start_time, end_time, Icon, additionalInfo } = collection;
  return (
    <InfoContainer>
      <span data-type={id}>
        <span>
          {Icon}
          <strong>{title}</strong>
        </span>
        <span>{`${FORMAT_HOUR(start_time)}–${FORMAT_HOUR(end_time)}`}</span>
        <span>{additionalInfo}</span>
      </span>
    </InfoContainer>
  );
};

export default AssignmentInfo;

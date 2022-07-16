import * as React from "react";
import * as _ from "lodash";
import Assignment from "./../../Modules/Assignment";

import {
  FORMAT_DURATION,
  CALCULATE_TIMELINE_BOX_WIDTH,
  CALCULATE_BLOCK_POSITION,
} from "./../../Utils";

import { EventContainer, Title } from "./Event.style";

import type { IAssignment, IEvent } from "./../../Utils";

export interface IProps {
  collection: IEvent[];
  unit: number;
}

const Event = ({ collection, unit }: IProps): JSX.Element => {
  const [isHovering, setHovering] = React.useState<boolean>(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };
  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <>
      {collection.map(
        ({ id, duration, start_time, assignments = [], name }: IEvent) => (
          <EventContainer
            width={CALCULATE_TIMELINE_BOX_WIDTH(duration, unit)}
            left={CALCULATE_BLOCK_POSITION(start_time, unit)}
            key={id}
            count={assignments.length}
          >
            <Title>
              {name
                ? `${name}: ${FORMAT_DURATION(duration)}`
                : FORMAT_DURATION(duration)}
            </Title>

            {!_.isEmpty(assignments) &&
              assignments.map((assignment: IAssignment) => (
                <Assignment
                  key={assignment.id}
                  collection={assignment}
                  unit={unit}
                  className={isHovering ? "focusedEvent" : ""}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                />
              ))}
          </EventContainer>
        )
      )}
    </>
  );
};

export default Event;

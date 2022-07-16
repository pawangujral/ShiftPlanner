import * as React from "react";
import type { IDefaultState, ISchedule } from "./../../Utils";
import Event from "./../../Modules/Event";
import GridContainer from "./../../Components/GridContainer";
import { TimelineBlock, ScheduleContainer } from "./Schedule.style";

interface IProps {
  collection: ISchedule[];
  unit: number;
  state: IDefaultState;
  gridSize: number;
}

const Schedule = ({
  collection,
  unit,
  state,
  gridSize,
}: IProps): JSX.Element => (
  <ScheduleContainer
    width={state.gridRowSize.width}
    count={state.gridColumnCount}
    unit={unit}
  >
    {collection.map(({ id, events = [] }: ISchedule) => (
      <React.Fragment key={id}>
        <TimelineBlock
          gridSize={{
            width: state.gridRowSize.width,
            height: gridSize,
          }}
        >
          <>
            <GridContainer
              unit={unit}
              gridCount={state.gridColumnCount}
              gridSize={{
                width: state.gridRowSize.width,
                height: gridSize,
              }}
              count={collection.length}
              time={state.time}
            />
            <Event collection={events} unit={unit} />
          </>
        </TimelineBlock>
      </React.Fragment>
    ))}
  </ScheduleContainer>
);

export default Schedule;

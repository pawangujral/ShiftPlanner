import * as React from "react";

import { MainContainer, SchedulerSection } from "./Timeline.style";
import * as _ from "lodash";
import moment from "moment";
import { CALCULATE_BLOCK_POSITION } from "./../../Utils";
import type { IDefaultState, ITimeline } from "./../../Utils";
import Aside from "./../../Components/Aside";
import Actions from "./../../Components/Actions";
import Indicator from "./../../Components/Indicator";
import Schedule from "./../../Modules/Schedule";
import Mayday from "../../Components/Mayday";

interface IProps {
  collection: ITimeline;
}

const DEFAULT_STATE: IDefaultState = {
  default: 1,
  offset: 600,
  condensed: false,
  gridColumnCount: 25, //! this should be dynamic
  gridRowSize: {
    max: 75,
    width: 60,
  },
  zoom: {
    min: 1,
    max: 8,
  },
  time: {
    format: "24",
  },
};

const Timeline = ({ collection }: IProps): JSX.Element => {
  const [toggleAside, setToggleAside] = React.useState<boolean>(true);
  const [unit, setUnit] = React.useState<number>(DEFAULT_STATE.default);

  const elRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (elRef.current) {
      // Scroll to current time to keep view in
      elRef.current.scrollTo({
        left:
          CALCULATE_BLOCK_POSITION(moment().format(), unit) -
          DEFAULT_STATE.offset,
        top: 0,
        behavior: "smooth",
      });
    }
  }, [unit]);

  const handleToggleZoom = (type: "increase" | "decrease") => {
    type === "increase" &&
      unit < DEFAULT_STATE.zoom.max &&
      setUnit((prevState) => prevState + 1);

    type === "decrease" &&
      unit > DEFAULT_STATE.zoom.min &&
      setUnit((prevState) => prevState - 1);
  };

  const handleToggle = () => {
    setToggleAside(!toggleAside);
  };

  if (!collection.schedules || _.isEmpty(collection.schedules)) {
    return (
      <>
        <Actions
          unit={unit}
          collection={collection}
          disabled={true}
          zoom={DEFAULT_STATE.zoom}
          handleToggleZoom={handleToggleZoom}
          handleToggle={handleToggle}
        />
        <Mayday message="Nothing scheduled for this date" />
      </>
    );
  }

  return (
    <>
      <Actions
        unit={unit}
        collection={collection}
        disabled={false}
        zoom={DEFAULT_STATE.zoom}
        handleToggleZoom={handleToggleZoom}
        handleToggle={handleToggle}
      />

      <SchedulerSection toggle={toggleAside.toString()}>
        {toggleAside && (
          <Aside
            collection={collection.schedules}
            size={DEFAULT_STATE.gridRowSize.max}
          />
        )}
        <MainContainer ref={elRef}>
          <Indicator unit={unit} />

          <Schedule
            collection={collection.schedules}
            unit={unit}
            state={DEFAULT_STATE}
            gridSize={DEFAULT_STATE.gridRowSize.max}
          />
        </MainContainer>
      </SchedulerSection>
    </>
  );
};
export default Timeline;

import * as React from 'react';

import { Container, Main, SideBar, Wrapper } from './Planner.style';
import _ from 'lodash';
import moment from 'moment';
import { CALCULATE_BLOCK_POSITION } from '../../Utils';
import type { IShiftPlannerProps, IDefaultState } from '../../Utils';
import DEFAULT_STATE from './../../Config';
import ShiftInfo from '../../Components/Aside/ShiftInfo';
import ActionsBar from '../../Components/ActionsBar';
import Indicator from '../../Components/Indicator';
import Shift from '../Shift';
import Mayday from '../../Components/Mayday';
import Slide from '@mui/material/Slide';

interface IProps extends IShiftPlannerProps {}

const Planner = ({
  plan,
  actions,
  handleAssigneeClick,
  handlePrevDateClick,
  handleNextDateClick,
  config,
  filterByOptions,
  handleFilterValue,
}: IProps): JSX.Element => {
  const containerRef = React.useRef(null);
  const [settings, setSettings] = React.useState<IDefaultState>(DEFAULT_STATE);
  const [toggleAside, setToggleAside] = React.useState<boolean>(true);

  const [unit, setUnit] = React.useState<number>(settings.zoom.default);

  const elRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (config) {
      if (
        config.zoom &&
        !_.inRange(config.zoom.default, settings.zoom.min, settings.zoom.max)
      ) {
        return;
      }
      setSettings(_.merge(DEFAULT_STATE, config));
    }
  }, [config]);

  React.useEffect(() => {
    if (elRef.current) {
      // Scroll to current time to keep view in
      elRef.current.scrollTo({
        left:
          CALCULATE_BLOCK_POSITION(moment().format(), unit) - settings.offset,
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [unit]);

  const handleToggleZoom = (type: 'increase' | 'decrease') => {
    type === 'increase' &&
      unit < DEFAULT_STATE.zoom.max &&
      setUnit((prevState) => prevState + 1);

    type === 'decrease' &&
      unit > DEFAULT_STATE.zoom.min &&
      setUnit((prevState) => prevState - 1);
  };

  const handleToggleSideBar = () => {
    setToggleAside(!toggleAside);
  };

  return (
    <Wrapper ref={containerRef}>
      <ActionsBar
        unit={unit}
        data={plan}
        disabled={!plan.shifts || _.isEmpty(plan.shifts)}
        zoom={settings.zoom}
        handleToggleZoom={handleToggleZoom}
        handleToggleSideBar={handleToggleSideBar}
        handlePrevDateChange={handlePrevDateClick}
        handleNextDateChange={handleNextDateClick}
        filterByOptions={filterByOptions}
        handleFilterValue={handleFilterValue}
      />

      {!(!plan.shifts || _.isEmpty(plan.shifts)) ? (
        <Container>
          <Slide
            direction="right"
            in={toggleAside}
            mountOnEnter
            unmountOnExit
            container={containerRef.current}
          >
            <SideBar>
              {plan.shifts.map((item) => (
                <ShiftInfo
                  data={item}
                  key={item.id}
                  size={settings.gridRowSize.max}
                  actions={actions}
                  handleAssigneeClick={handleAssigneeClick}
                />
              ))}
            </SideBar>
          </Slide>

          <Main ref={elRef}>
            <Indicator unit={unit} />

            <Shift
              data={plan.shifts}
              unit={unit}
              state={settings}
              gridSize={settings.gridRowSize.max}
              actions={actions}
              handleAssigneeClick={handleAssigneeClick}
            />
          </Main>
        </Container>
      ) : (
        <Mayday message="Nothing scheduled for this date" />
      )}
    </Wrapper>
  );
};
export default Planner;

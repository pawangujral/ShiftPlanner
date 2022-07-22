import * as React from 'react';

import { Container, Main } from './Planner.style';
import _ from 'lodash';
import moment from 'moment';
import { CALCULATE_BLOCK_POSITION } from '../../Utils';
import type { IShiftPlannerProps } from '../../Utils';
import { DEFAULT_STATE } from './../../Config';
import Aside from '../../Components/Aside';
import Actions from '../../Components/Actions';
import Indicator from '../../Components/Indicator';
import Shift from '../Shift';
import Mayday from '../../Components/Mayday';

interface IProps extends IShiftPlannerProps {}

const Planner = ({
  plan,
  actions,
  handleAssigneeClick,
  handlePrevDateClick,
  handleNextDateClick,
}: IProps): JSX.Element => {
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

  const handleToggle = () => {
    setToggleAside(!toggleAside);
  };

  if (!plan.shifts || _.isEmpty(plan.shifts)) {
    return (
      <React.Fragment>
        <Actions
          unit={unit}
          data={plan}
          disabled={true}
          zoom={DEFAULT_STATE.zoom}
          handleToggleZoom={handleToggleZoom}
          handleToggle={handleToggle}
        />
        <Mayday message="Nothing scheduled for this date" />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Actions
        unit={unit}
        data={plan}
        disabled={false}
        zoom={DEFAULT_STATE.zoom}
        handleToggleZoom={handleToggleZoom}
        handleToggle={handleToggle}
        handlePrevDateChange={handlePrevDateClick}
        handleNextDateChange={handleNextDateClick}
      />

      <Container toggle={toggleAside}>
        {toggleAside && (
          <Aside
            data={plan.shifts}
            size={DEFAULT_STATE.gridRowSize.max}
            actions={actions}
            handleAssigneeClick={handleAssigneeClick}
          />
        )}

        <Main ref={elRef}>
          <Indicator unit={unit} />

          <Shift
            data={plan.shifts}
            unit={unit}
            state={DEFAULT_STATE}
            gridSize={DEFAULT_STATE.gridRowSize.max}
            actions={actions}
            handleAssigneeClick={handleAssigneeClick}
          />
        </Main>
      </Container>
    </React.Fragment>
  );
};
export default Planner;

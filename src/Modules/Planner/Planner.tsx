import * as React from 'react'

import { Container, Main } from './Planner.style'
import _ from 'lodash'
import moment from 'moment'
import { CALCULATE_BLOCK_POSITION } from '../../Utils'
import type { IDefaultState, IPlanner } from '../../Utils'
import Aside from '../../Components/Aside'
import Actions from '../../Components/Actions'
import Indicator from '../../Components/Indicator'
import Shift from '../Shift'
import Mayday from '../../Components/Mayday'

interface IProps {
  data: IPlanner
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
    format: '24',
  },
}

const Planner = ({ data }: IProps): JSX.Element => {
  const [toggleAside, setToggleAside] = React.useState<boolean>(true)
  const [unit, setUnit] = React.useState<number>(DEFAULT_STATE.default)

  const elRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (elRef.current) {
      // Scroll to current time to keep view in
      elRef.current.scrollTo({
        left:
          CALCULATE_BLOCK_POSITION(moment().format(), unit) -
          DEFAULT_STATE.offset,
        top: 0,
        behavior: 'smooth',
      })
    }
  }, [unit])

  const handleToggleZoom = (type: 'increase' | 'decrease') => {
    type === 'increase' &&
      unit < DEFAULT_STATE.zoom.max &&
      setUnit((prevState) => prevState + 1)

    type === 'decrease' &&
      unit > DEFAULT_STATE.zoom.min &&
      setUnit((prevState) => prevState - 1)
  }

  const handleToggle = () => {
    setToggleAside(!toggleAside)
  }

  if (!data.shifts || _.isEmpty(data.shifts)) {
    return (
      <React.Fragment>
        <Actions
          unit={unit}
          data={data}
          disabled={true}
          zoom={DEFAULT_STATE.zoom}
          handleToggleZoom={handleToggleZoom}
          handleToggle={handleToggle}
        />
        <Mayday message="Nothing scheduled for this date" />
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Actions
        unit={unit}
        data={data}
        disabled={false}
        zoom={DEFAULT_STATE.zoom}
        handleToggleZoom={handleToggleZoom}
        handleToggle={handleToggle}
      />

      <Container toggle={toggleAside}>
        {toggleAside && (
          <Aside data={data.shifts} size={DEFAULT_STATE.gridRowSize.max} />
        )}

        <Main ref={elRef}>
          <Indicator unit={unit} />

          <Shift
            data={data.shifts}
            unit={unit}
            state={DEFAULT_STATE}
            gridSize={DEFAULT_STATE.gridRowSize.max}
          />
        </Main>
      </Container>
    </React.Fragment>
  )
}
export default Planner
import * as React from 'react'
import type { IDefaultState, IShift } from '../../Utils'
import Group from '../Group'
import GridContainer from '../../Components/GridContainer'
import { Block, Container } from './Shift.style'

interface IProps {
  data: IShift[]
  unit: number
  state: IDefaultState
  gridSize: number
}

const Schedule = ({ data, unit, state, gridSize }: IProps): JSX.Element => (
  <Container
    width={state.gridRowSize.width}
    count={state.gridColumnCount}
    unit={unit}
  >
    {data.map(({ id, groups = [] }: IShift) => (
      <React.Fragment key={id}>
        <Block
          gridSize={{
            width: state.gridRowSize.width,
            height: gridSize,
          }}
        >
          <React.Fragment>
            <GridContainer
              unit={unit}
              gridCount={state.gridColumnCount}
              gridSize={{
                width: state.gridRowSize.width,
                height: gridSize,
              }}
              count={data.length}
              time={state.time}
            />
            {groups.map((item, index) => (
              <Group data={item} unit={unit} key={index} />
            ))}
          </React.Fragment>
        </Block>
      </React.Fragment>
    ))}
  </Container>
)

export default Schedule

import * as React from 'react';
import type { IDefaultState, IShift, IPlanActions } from '../../Utils';
import Group from '../Group';
import GridContainer from '../../Components/GridContainer';
import { Block, Container } from './Shift.style';

export interface IProps {
  data: IShift[];
  unit: number;
  state: IDefaultState;
  gridSize: number;
  actions: IPlanActions;
  handleAssigneeClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Shift = ({
  data,
  unit,
  state,
  gridSize,
  actions,
  handleAssigneeClick,
}: IProps): JSX.Element => (
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
              <Group
                data={item}
                unit={unit}
                key={index}
                actions={actions}
                handleAssigneeClick={handleAssigneeClick}
              />
            ))}
          </React.Fragment>
        </Block>
      </React.Fragment>
    ))}
  </Container>
);

export default Shift;

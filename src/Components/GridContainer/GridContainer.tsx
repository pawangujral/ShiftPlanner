import * as React from 'react';
import type { ITime } from './../../Utils';

import { GridRow, GridColumn } from './GridContainer.style';
import moment from 'moment';

export interface IProps {
  unit: number;
  gridCount: number;
  gridSize: { width: number; height: number };
  time: ITime;
  count: number;
}

const GridContainer = ({
  unit,
  gridCount,
  gridSize,
  time,
}: IProps): JSX.Element => {
  const renderTimeText = React.useCallback((index: number) => {
    return moment({ hour: index }).format(
      time.format === '24' ? 'HH:mm' : 'hh:mm A'
    );
  }, []);

  return (
    <GridRow count={gridCount} size={gridSize} unit={unit}>
      {[...Array(gridCount)].map((_, index) => {
        return (
          <GridColumn
            key={index}
            data-slot={index}
            data-title={renderTimeText(index)}
            data-type="GridColumn"
          />
        );
      })}
    </GridRow>
  );
};

export default React.memo(GridContainer);

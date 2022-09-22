import * as React from 'react';
import _ from 'lodash';
import {
  CALCULATE_DURATION,
  FORMAT_DURATION,
  FORMAT_HOUR,
} from '../../../Utils';
import type { IShift, IPlanActions } from '../../../Utils';
import { TotalTime, StartTime, EndTime, Duration } from './ShiftInfo.style';
import Tooltip from '@mui/material/Tooltip';
import { AsideBlock, AsideItem, Name } from '../Aside.style';
import Users from '../../Users';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import ShiftMenu from './ShiftMenu';

interface IProps {
  data: IShift;
  size: number;
  actions?: IPlanActions;
  handleAssigneeClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const ShiftInfo = ({ data, size, actions, handleAssigneeClick }: IProps) => {
  const {
    id: shiftId,
    name,
    assignee,
    startTime,
    endTime,
    isActionEnabled = true,
  } = data;

  return (
    <React.Fragment>
      <AsideBlock height={size} key={shiftId}>
        <AsideItem>
          <Tooltip title={name} placement="top" arrow>
            <Name>
              {name && _.trim(name).length ? _.upperFirst(name) : shiftId}
            </Name>
          </Tooltip>
          {assignee && !_.isEmpty(assignee) ? (
            <Users
              data={assignee}
              size={18}
              handleAssigneeClick={handleAssigneeClick}
            />
          ) : (
            <TotalTime>
              <AlarmOnIcon sx={{ fontSize: 'inherit' }} />{' '}
              {FORMAT_DURATION(CALCULATE_DURATION(startTime, endTime))}
            </TotalTime>
          )}
          <Duration>
            <StartTime>Start: {FORMAT_HOUR(startTime)}</StartTime>
            <EndTime>End: {FORMAT_HOUR(endTime)}</EndTime>
          </Duration>
        </AsideItem>

        <ShiftMenu
          actions={actions}
          shiftId={shiftId}
          isActionEnabled={isActionEnabled}
        />
      </AsideBlock>
    </React.Fragment>
  );
};

export default ShiftInfo;

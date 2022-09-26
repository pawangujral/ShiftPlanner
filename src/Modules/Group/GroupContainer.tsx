import * as React from 'react';
import _ from 'lodash';
// import GroupDetail from '../../Components/GroupDetail';
// import Drawer from '@mui/material/Drawer';
import type { ITask } from '../../Utils';
import { Title } from './Group.style';
import GroupMenu from './GroupMenu';
import type { IPlanActions } from '../../Utils';

export interface IProps {
  tasks: ITask[];
  name: string;
  duration: number;
  actions?: IPlanActions;
}

const GroupContainer = ({
  // tasks,
  name,
  // duration,
  actions,
}: IProps): JSX.Element => {
  // const [isOpen, setOpen] = React.useState<boolean>(false);

  // const handleGroupClick = (event: React.MouseEvent<HTMLDivElement>) => {
  //   event.preventDefault();
  //   setOpen(true);
  // };

  return (
    <React.Fragment>
      <Title>
        <span>{name && _.upperFirst(name)}</span>
        <GroupMenu actions={actions} isActionEnabled blockId={'1'} />
        {/* <em>{FORMAT_DURATION(duration)}</em> */}
      </Title>
      {/* <Drawer anchor="right" open={isOpen} onClose={() => setOpen(false)}>
        <GroupDetail data={tasks} />
      </Drawer> */}
    </React.Fragment>
  );
};

export default GroupContainer;

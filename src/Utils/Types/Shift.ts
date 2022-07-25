import {IBase} from "./Base";
import {IAssignee} from "./Assignee";
import {IGroup} from "./Group";

export interface IShift extends IBase {
  name: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
  groups: IGroup[];
  assignee?: IAssignee[];
  isActionEnabled?: boolean;
}

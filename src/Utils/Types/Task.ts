import {IBase} from "./Base";
import {IAssignee} from "./Assignee";

export interface ITask extends IBase {
  name: string;
  startTime: string;
  endTime: string;
  assignee?: IAssignee[];
  createdAt?: string;
  updatedAt?: string;
  additionalInfo?: string;
  isActionEnabled?: boolean;
}

import type { ReactNode } from 'react';
import {IBase} from "./Base";
import {IAssignee} from "./Assignee";
import {TColor} from "./Color";

export interface ITask extends IBase {
  name: string;
  startTime: string;
  endTime: string;
  assignee?: IAssignee[];
  createdAt?: string;
  updatedAt?: string;
  additionalInfo?: string;
  Icon?: ReactNode;
  color?: string | TColor;
  isActionEnabled?: boolean;
}

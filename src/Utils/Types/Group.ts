import {IBase} from "./Base";
import {ITask} from "./Task";

export interface IGroup extends IBase {
  startTime: string;
  endTime: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  tasks: ITask[];
}

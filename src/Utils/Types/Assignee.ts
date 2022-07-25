import {IBase} from "./Base";

export interface IAssignee extends IBase {
  name: string;
  image: string;
  description?: string;
}

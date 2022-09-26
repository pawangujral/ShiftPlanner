export interface IAction {
  text: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface IPlanActions {
  shift: IAction[];
  task: IAction[];
  block: IAction[];
}

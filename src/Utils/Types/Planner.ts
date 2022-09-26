import type {IBase} from "./Base";
import type {IConfig} from "./Config";
import type {IMetaData} from "./Meta";
import type {IShift} from "./Shift";
import type {IPlanActions} from "./Action";
import type {ThemeOptions} from '@mui/material/styles';
import type {TFilterOptions, TFilterState} from "./Filters";

export interface IPlanner extends IBase {
  metaData: IMetaData;
  shifts: IShift[];
}

export interface IShiftPlannerProps {
  plan: IPlanner;
  actions?: IPlanActions;
  handlePrevDateClick?: (event: React.MouseEvent<HTMLElement>) => void;
  handleNextDateClick?: (event: React.MouseEvent<HTMLElement>) => void;
  handleAssigneeClick?: (event: React.MouseEvent<HTMLElement>) => void;
  config?: IConfig;
  theme?: ThemeOptions;
  dark?: boolean;
  filterByOptions?: TFilterOptions;
  handleFilterValue?: (values: TFilterState) => void;
}

import type {IGridSize} from './Grid';
import type {ITime} from './Time';
import type {IZoom} from './Zoom';

export interface IDefaultState {
  offset: number;
  condensed: boolean;
  gridColumnCount: number;
  gridRowSize: IGridSize;
  zoom: IZoom;
  time: ITime;
}

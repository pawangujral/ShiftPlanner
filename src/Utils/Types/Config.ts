import type {ITime} from './Time';
import type {IZoom} from './Zoom';


export interface IConfig {
  condensed: boolean;
  zoom: Pick<IZoom, 'default'>;
  time: ITime;
}

import { IDefaultState } from '../Utils';

const DEFAULT_STATE: IDefaultState = {
  offset: 600,
  condensed: false,
  gridColumnCount: 24,
  gridRowSize: {
    max: 75,
    width: 60,
  },
  zoom: {
    default: 2,
    min: 1,
    max: 8,
  },
  time: {
    format: 24,
  },
};

export default DEFAULT_STATE;

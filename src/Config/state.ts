import { IDefaultState } from './../Utils';

export const DEFAULT_STATE: IDefaultState = {
  default: 1,
  offset: 600,
  condensed: false,
  gridColumnCount: 25, //! this should be dynamic
  gridRowSize: {
    max: 75,
    width: 60,
  },
  zoom: {
    min: 1,
    max: 8,
  },
  time: {
    format: '24',
  },
};

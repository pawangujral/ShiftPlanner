import type {ReactNode} from "react";
import * as React from "react";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export interface IBase {
  id: string;
}

export type Color = RGB | RGBA | HEX;

export interface IZoom {
  min: number,
  max: number,
}

export interface IGridSize extends Pick<IZoom, 'max'> {
  width: number
}

export interface ITime {
  format: '12' | '24'
}

export interface IActions {
  text: string,
  onClick: (event: React.MouseEvent) => void
}

export interface IDefaultState {
    default: number,
    offset: number,
    condensed: boolean,
    gridColumnCount: number,
    gridRowSize:IGridSize,
    zoom: IZoom,
    time: ITime
};

export interface IAssignee extends IBase {
  name: string,
  image: string,
  onClick?: (event: React.MouseEvent) => void
  description?: string,
}

export interface ITask extends IBase{
  name: string,  
  startTime: string,
  endTime: string,
  assignee?: IAssignee[],
  createdAt?: string,
  updatedAt?: string,
  additionalInfo?: string,
  Icon?: ReactNode,
  color?: string | Color,
  actions? : IActions[]
}

export interface IGroup extends IBase {
  startTime:string,
  endTime:string,
  name:string,
  createdAt:string,
  updatedAt:string,
  tasks: ITask[],
}

export interface IShift extends IBase {
  name: string,
  startTime: string,
  endTime: string,
  createdAt: string,
  updatedAt:string,
  groups: IGroup[],
  assignee?: IAssignee[],
  actions? : IActions[]
}

export interface IMetaData {
  scheduledDate: string,
  createdAt: string,
  updatedAt: string,
  location: string,
  status?: string,
  rawData?: any,
  onPrevDateClick?: (event: React.MouseEvent) => void;
  onNextDateClick?: (event: React.MouseEvent) => void;
}


export interface IPlanner extends IBase {  
  metaData: IMetaData,
  shifts: IShift[], 

}
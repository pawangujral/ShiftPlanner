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

export interface IAssignment extends IBase{
  title: string, 
  duration: number,
  start_time: string,
  end_time: string,
  assignee?: IAssignee[],
  created_at?: string,
  updated_at?: string,
  additionalInfo?: string,
  Icon?: ReactNode,
  color?: string | Color,
  actions? : IActions[]
}

export interface IEvent extends IBase {
  duration:number,
  start_time:string,
  end_time:string,
  name:string,
  created_at:string,
  updated_at:string,
  assignments:IAssignment[],
}

export interface ISchedule extends IBase {
  name: string,
  start_time: string,
  end_time: string,
  duration:number,
  created_at: string,
  updated_at:string,
  events: IEvent[],
  assignee?: IAssignee[],
  actions? : IActions[]
}

export interface IMetaData {
  scheduled_date: string,
  created_at: string,
  updated_at: string,
  location: string,
  status?: string,
  rawData?: any,
  onPrevDateClick?: (event: React.MouseEvent) => void;
  onNextDateClick?: (event: React.MouseEvent) => void;
}


export interface ITimeline extends IBase {  
  metadata: IMetaData,
  schedules: ISchedule[],

}
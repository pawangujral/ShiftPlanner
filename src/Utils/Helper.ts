import moment from 'moment';
 
export function FORMAT_DURATION(duration: number) {
  return moment
    .utc(moment.duration(duration, 'minutes').asMilliseconds())
    .format('H[h]mm[m]');
}

export function FORMAT_HOUR(dateTime: string) {
  return moment(dateTime).format('HH:mm');
} 

export function FORMAT_DATE_TO_MINS(dateTime: string) {
  const currentTime = moment(dateTime);
  const MidnightTime = currentTime.clone().startOf('day');
  return currentTime.diff(MidnightTime, 'minutes');
}

export function CALCULATE_BLOCK_POSITION(time: string, unit: number) {
  return Math.ceil(FORMAT_DATE_TO_MINS(time) * unit);
}

export function CALCULATE_WIDTH(duration: number, unit: number) {
  return Math.ceil(duration) * unit;
}

export function CALCULATE_DURATION(start:string, end: string) {
  const startDate = moment(start); // start date
  const endDate = moment(end); // end date 
  return endDate.diff(startDate, "minutes", true)
}
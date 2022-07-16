import moment from 'moment';

export function CONVERT_KEY_TO_TEXT(key: string | undefined): string {
  if (!key) {
    return '';
  }
  const TrimmedText = key.replace('_', ' ').toLowerCase();
  return TrimmedText.charAt(0).toUpperCase() + TrimmedText.slice(1);
}

export function FORMAT_GENERATED_TIME(date: string) {
  return moment(date).calendar({ sameElse: 'YYYY-MM-DD' });
}

export function FORMAT_DATE(date: string) {
  return moment(date).format('YYYY-MM-DD');
}

export function FORMAT_DURATION(duration: number) {
  return moment
    .utc(moment.duration(duration, 'seconds').asMilliseconds())
    .format('H[h]mm[m]');
}

export function FORMAT_HOUR(dateTime: string) {
  return moment(dateTime).format('HH:mm');
}

export function MINUTES_SINCE_DAYSTART(time: string) {
  const dayStart = moment('00:00', 'H:mm');
  const startTime = moment(moment(time).format('H:mm'), 'H:mm');

  const duration = moment.duration(startTime.diff(dayStart));
  return duration.asMinutes();
}

export function FORMAT_DATE_TO_MINS(dateTime: string) {
  const currentTime = moment(dateTime);
  const MidnightTime = currentTime.clone().startOf('day');
  return currentTime.diff(MidnightTime, 'minutes');
}

export function CALCULATE_BLOCK_POSITION(time: string, unit: number) {
  return Math.ceil(FORMAT_DATE_TO_MINS(time) * unit);
}

export function CALCULATE_TIMELINE_BOX_WIDTH(duration: number, unit: number) {
  return Math.ceil(duration / 60) * unit;
}



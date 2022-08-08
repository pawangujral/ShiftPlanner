import { randomNumber } from './Helper';

import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  teal,
  blue,
  lightBlue,
  cyan,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  blueGrey,
} from '@mui/material/colors';

export const muiColors = [
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  teal,
  blue,
  lightBlue,
  cyan,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  blueGrey,
];

export function generateRandomColor(intensity: number = 50): string {
  return [muiColors[randomNumber(0, muiColors.length - 1)]][0][intensity];
}

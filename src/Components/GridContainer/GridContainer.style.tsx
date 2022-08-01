import { styled } from '@mui/system';
import { grey } from '@mui/material/colors';

export const GridRow = styled('span', {
  shouldForwardProp: (prop) =>
    prop !== 'column' && prop !== 'row' && prop !== 'gridSize',
})<{
  unit: number;
  count: number;
  size: { width: number; height: number };
}>(({ size, count, unit }) => ({
  position: 'absolute',
  width: '100%',
  display: 'grid',
  gridGap: 0,
  transition: 'all .2s linear',
  gridTemplateColumns: `repeat(${count}, calc(${size.width}px * ${unit}))`,
  gridTemplateRows: size.height,
}));

export const GridColumn = styled('span')({
  display: 'block',
  padding: '0.5em',
  color: 'gray',
  fontSize: '10px',
  borderLeft: '1px solid',
  borderBottom: '1px solid',
  borderColor: grey[200],
  transition: 'all .2s linear',
  overflow: 'hidden',
  opacity: '.5',

  '&:nth-child(even)': {
    backgroundColor: grey[50],
    '&:before': {
      backgroundColor: 'transparent',
    },
  },
  '&:nth-child(odd)': {
    backgroundColor: grey[100],
    '&:before': {
      backgroundColor: 'transparent',
    },
  },

  '&:first-child': {
    borderLeft: 0,
  },

  '&:before': {
    content: 'attr(data-title)',
    position: 'relative',
    top: -20,
    color: grey[900],
    width: 'calc(100% + 1em + 1px)',
    display: 'block',
    left: 'calc(-0.5em - 1px)',
    borderLeft: '1px solid',
    borderBottom: '1px solid',
    borderColor: grey[200],
    textIndent: '.5em',
  },
});

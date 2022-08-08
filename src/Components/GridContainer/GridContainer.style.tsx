import { styled } from '@mui/system';

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

export const GridColumn = styled('span')(({ theme }) => ({
  display: 'block',
  fontSize: '10px',
  borderLeft: '1px solid',
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
  transition: 'all .2s linear',
  overflow: 'hidden',
  opacity: 0.5,

  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.background.default,
    '&:before': {
      backgroundColor: 'transparent',
    },
  },

  '&:first-of-type': {
    borderLeft: 0,
  },

  '&:before': {
    content: 'attr(data-title)',
    position: 'relative',
    top: -16,
    color: theme.palette.text.primary,
    width: '100%',
    display: 'block',
    left: -1,
    textIndent: theme.spacing(0.5),
    textAlign: 'left',
    fontWeight: 'bold',
  },
}));

import { styled } from '@mui/system';

export const Container = styled('div', {
  shouldForwardProp: (prop) => prop !== 'width',
})<{ width: number; count: number; unit: number }>(
  ({ width, count, unit }) => ({
    width: `calc(${width}px * ${count} * ${unit})`,

    '[data-wrapper="block"]: not(:first-child)': {
      '[data-type="GridColumn"]': {
        '&:before': {
          content: 'none',
        },
      },
    },
  })
);

export const Block = styled('div', {
  shouldForwardProp: (prop) => prop !== 'gridSize',
})<{
  gridSize: { width: number; height: number };
}>(({ gridSize }) => ({
  height: gridSize.height,

  '&:first-child': {
    '[data-type=GridColumn]': {
      overflow: 'visible',
    },
  },

  '&:last-child': {
    borderBottom: 0,
  },
}));

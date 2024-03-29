import { styled } from '@mui/system';

export const Container = styled('div', {
  shouldForwardProp: (prop) => prop !== 'width',
})<{ width: number; count: number; unit: number }>(
  ({ width, count, unit }) => ({
    width: `calc(${width}px * ${count} * ${unit})`,

    '[data-wrapper="block"]: not(:first-of-type)': {
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

  '&:first-of-type': {
    '[data-type=GridColumn]': {
      overflow: 'visible',
    },
  },

  '&:last-child': {
    span: {
      borderBottom: 0,
    },
  },
}));

import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import type { TColor } from '../../Utils';

export const Container = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'width' && prop !== 'padding',
})<{
  width: number;
  padding: number;
  color?: TColor | string;
}>(({ width, theme, color }) => ({
  width: width,
  overflow: 'hidden',
  transition: 'all .2s linear',
  padding:
    width < 100
      ? width < 8
        ? theme.spacing(1, 0)
        : theme.spacing(1, 0.5)
      : theme.spacing(1),
  position: 'relative',
  display: 'inline-block',
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.background.paper : color,
  height: 48,
  border: `1px solid ${theme.palette.background.default}`,
}));

export const Block = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const InfoBox = styled('div')({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

export const Title = styled('h6')<{ theme?: { status: { danger: string } } }>(
  ({ theme }) => ({
    margin: theme.spacing(0),
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    color: theme.palette.text.primary,
    fontSize: '0.67em',
  })
);

export const Info = styled('small')(({ theme }) => ({
  margin: theme.spacing(0),
  display: 'flex',
  alignItems: 'center',
  fontSize: '10px',
  color: theme.palette.text.secondary,

  '.MuiSvgIcon-root': {
    // color: theme.palette.primary.main,
  },
}));

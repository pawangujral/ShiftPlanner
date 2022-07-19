import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import { Color } from '../../Utils';
import { grey } from '@mui/material/colors';

export const Container = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'width' && prop !== 'padding',
})<{
  width: number;
  padding: number;
  color?: Color | string;
}>(({ width, padding }) => ({
  width: width,
  overflow: 'hidden',
  transition: 'all .2s linear',
  padding: `${padding < 20 ? '.5em 0px' : '.5em'}`,
  position: 'relative',
  display: 'inline-block',
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
    margin: 0,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    color: theme.palette.primary.main,
  })
);

export const Info = styled('small')({
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  fontSize: '10px',
  color: grey[600],

  '.MuiSvgIcon-root': {
    // color: theme.palette.primary.main,
  },
});

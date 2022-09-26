import { styled } from '@mui/system';

export const Container = styled('div', {
  shouldForwardProp: (prop) => prop !== 'width' && prop !== 'left',
})<{ width: number; left: number }>(({ width, left, theme }) => ({
  position: 'absolute',
  zIndex: 1,
  width: width,
  left: left,
  marginTop: theme.spacing(0.2),
  cursor: 'pointer',
  '&:before': {
    content: 'attr(data-title)',
    fontSize: 12,
    position: 'absolute',
    top: -5,
  },
}));

export const Title = styled('h5')(({ theme }) => ({
  margin: theme.spacing(0),
  fontSize: 10,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  letterSpacing: '0.02em',
  color: theme.palette.text.secondary,
  fontWeight: 400,
  span: {
    width: '70%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    display: 'inline-block',
    marginRight: 10,
    textAlign: 'left',
  },
  em: {
    fontStyle: 'normal',
  },
}));

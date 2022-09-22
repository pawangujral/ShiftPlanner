import { styled } from '@mui/system';

export const TotalTime = styled('span')(({ theme }) => ({
  fontSize: '10px',
  color: theme.palette.text.secondary,
  textAlign: 'left',
  display: 'block',
}));

export const StartTime = styled('span')({
  fontSize: '10px',
});

export const EndTime = styled('span')({
  fontSize: '10px',
});

export const Duration = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  color: theme.palette.text.secondary,
}));

export const Container = styled('aside')(({ theme }) => ({
  margin: theme.spacing(2, 0, 0, 0),
}));

export const AsideBlock = styled('div')<{
  height: number;
}>(({ height, theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid',
  borderRight: '1px solid',
  borderColor: theme.palette.divider,
  height: height,
  padding: theme.spacing(1),
  alignItems: 'center',
  transition: 'all .2s ease',
  '&:last-of-type': {
    borderBottom: 0,
  },
}));

export const AsideItem = styled('div')({
  width: '80%',
});

export const Name = styled('h5')(({ theme }) => ({
  fontSize: 12,
  fontWeight: 400,
  margin: theme.spacing(0),
  color: theme.palette.text.primary,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}));

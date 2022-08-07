import { styled } from '@mui/system';

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

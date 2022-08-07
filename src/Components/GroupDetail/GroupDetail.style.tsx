import { styled } from '@mui/system';

export const Container = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  width: 400,
}));

export const MainTitle = styled('h2')(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const Title = styled('h6')(({ theme }) => ({
  margin: theme.spacing(0),
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  color: theme.palette.text.primary,
}));

export const Info = styled('small')(({ theme }) => ({
  margin: theme.spacing(0, 0, 1, 0),
  display: 'flex',
  alignItems: 'center',
  fontSize: '10px',
  color: theme.palette.text.secondary,

  '.MuiSvgIcon-root': {
    // color: theme.palette.primary.main,
  },
}));

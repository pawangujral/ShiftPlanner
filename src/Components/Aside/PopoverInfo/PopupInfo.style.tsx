import { styled } from '@mui/system';

export const InfoContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const InfoBlock = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export const Title = styled('p')(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.text.secondary,
  fontWeight: 400,
  margin: theme.spacing(0),
}));

import { styled } from '@mui/system';

export const Current = styled('div')(({ theme }) => ({
  fontWeight: '700',
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

export const Location = styled('small')(({ theme }) => ({
  display: 'block',
  fontSize: 8,
  color: theme.palette.text.secondary,
}));

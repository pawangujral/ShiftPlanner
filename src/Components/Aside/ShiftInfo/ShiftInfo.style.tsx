import { styled } from '@mui/system';

export const TotalTime = styled('span')(({ theme }) => ({
  fontSize: '10px',
  color: theme.palette.text.secondary,
  textAlign: 'left',
  display: 'block',
}));

export const StartTime = styled('span')(({ theme }) => ({
  fontSize: '10px',
}));

export const EndTime = styled('span')(({ theme }) => ({
  fontSize: '10px',
}));

export const Duration = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  color: theme.palette.text.secondary,
}));

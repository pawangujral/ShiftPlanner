import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const Wrapper = styled(Box)(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.palette.divider,
  borderRadius: 4,
  background: theme.palette.common.white,
  padding: theme.spacing(2),
}));

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  transition: ' all .2s ease',
  borderTop: '1px solid',
  borderColor: theme.palette.divider,
  marginTop: theme.spacing(2),
  paddingTop: theme.spacing(2),
}));

export const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'toggle',
})<{ toggle: boolean }>(({ toggle, theme }) => ({
  overflow: 'hidden',
  overflowX: 'scroll',
  padding: theme.spacing(2, 0, 0, 0),
  transition: 'all .2s linear',
  position: 'relative',
  marginLeft: `${toggle ? 0 : '-250px'}`,
}));

export const SideBar = styled('aside', {
  shouldForwardProp: (prop) => prop !== 'toggle',
})<{ toggle: boolean }>(({ toggle, theme }) => ({
  margin: theme.spacing(2, 0, 0, 0),
  opacity: `${toggle ? 1 : 0}`,
  transition: ' all .3s ease',
  width: 250,
}));

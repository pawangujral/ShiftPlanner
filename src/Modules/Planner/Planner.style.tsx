import { styled } from '@mui/system';

export const Container = styled('div')({
  display: 'flex',
  backgroundColor: '#ffffff',
  marginBottom: '4em',
  transition: ' all .2s ease',
});

export const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'toggle',
})<{ toggle: boolean }>(({ toggle }) => ({
  overflow: 'hidden',
  overflowX: 'scroll',
  padding: '15px 0 0 0',
  transition: 'all .2s linear',
  position: 'relative',
  marginLeft: `${toggle ? 0 : '-250px'}`,
}));

export const SideBar = styled('aside', {
  shouldForwardProp: (prop) => prop !== 'toggle',
})<{ toggle: boolean }>(({ toggle }) => ({
  margin: '15px 0 0 0',
  opacity: `${toggle ? 1 : 0}`,
  transition: ' all .3s ease',
  width: 250,
}));

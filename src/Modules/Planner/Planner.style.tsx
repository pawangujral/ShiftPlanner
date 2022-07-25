import { styled } from '@mui/system';

export const Container = styled('div', {
  shouldForwardProp: (prop) => prop !== 'toggle',
})<{ toggle: boolean }>(({ toggle }) => ({
  display: 'grid',
  gridTemplateColumns: `${toggle ? '250px 1fr' : '1fr'}`,
  backgroundColor: '#ffffff',
  marginBottom: '4em',
  transition: ' all .2s ease',
}));

export const Main = styled('main')({
  overflow: 'hidden',
  overflowX: 'scroll',
  padding: '15px 0 0 0',
  transition: 'all .2s linear',
  position: 'relative',
});

export const SideBar = styled('aside')({
  margin: '15px 0 0 0',
});

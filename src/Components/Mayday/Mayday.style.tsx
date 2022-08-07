import { styled } from '@mui/system';

export const ImageBlock = styled('div')(({ theme }) => ({
  maxWidth: 300,
  margin: theme.spacing(4, 'auto'),
  image: {
    filter:
      'invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%)',
  },
}));

export const Title = styled('p')(({ theme }) => ({
  color: theme.palette.text.primary,
  textAlign: 'center',
  marginTop: theme.spacing(3),
  fontWeight: 700,
}));

export const ImageContainer = styled('img')({
  width: '100%',
  height: '100%',
});

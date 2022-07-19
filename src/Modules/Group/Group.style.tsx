import { styled } from '@mui/system'
import { grey } from '@mui/material/colors'

export const Container = styled('div', {
  shouldForwardProp: (prop) => prop !== 'width' && prop !== 'left',
})<{ width: number; left: number }>(({ width, left }) => ({
  position: 'absolute',
  zIndex: 1,
  width: width,
  left: left,
  marginTop: 5,
  cursor: 'pointer',
  '&:before': {
    content: 'attr(data-title)',
    fontSize: 12,
    position: 'absolute',
    top: -5,
  },
}))

export const Title = styled('h5')({
  margin: 0,
  fontSize: 10,
  display: 'flex',
  justifyContent: 'space-between',
  letterSpacing: '0.02em',
  color: grey[600],
  fontWeight: 400,
  span: {
    width: '70%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    display: 'inline-block',
    marginRight: 10,
  },
  em: {
    fontStyle: 'normal',
  },
})

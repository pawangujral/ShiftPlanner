import { styled } from '@mui/system'
import Paper from '@mui/material/Paper'
import { Color } from './../../Utils'
import { grey } from '@mui/material/colors'

export const AssignmentContainer = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'width' && prop !== 'padding',
})<{
  width: number
  padding: number
  color?: Color | string
}>(({ width, padding }) => ({
  width: width,
  overflow: 'hidden',
  transition: 'all .5s linear',
  transitionDelay: '.5s',
  padding: `${padding < 20 ? '.5em 0px' : '.5em'}`,
  position: 'relative',
  display: 'inline-block',

  ':hover': {
    padding: '.5em',
  },
}))

export const AssignmentBlock = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const InfoBox = styled('article')({})

export const Title = styled('h6')<{ theme?: { status: { danger: string } } }>(
  ({ theme }) => ({
    margin: 0,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: theme.palette.primary.main,
  })
)

export const Info = styled('small')({
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  fontSize: '10px',
  color: grey[600],

  '.MuiSvgIcon-root': {
    // color: theme.palette.primary.main,
  },
})

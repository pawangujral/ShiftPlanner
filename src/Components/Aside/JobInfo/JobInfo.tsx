import * as React from 'react'
import _ from 'lodash'
import { CALCULATE_DURATION, FORMAT_DURATION } from './../../../Utils'
import type { IShift } from './../../../Utils'
import { TotalTime } from './JobInfo.style'
import { AsideBlock, AsideItem, Name } from './../Aside.style'
import Users from './../../../Components/Users'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import AlarmOnIcon from '@mui/icons-material/AlarmOn'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

interface IProps {
  data: IShift
  size: number
}

const JobInfo = ({ data, size }: IProps) => {
  const { id, name, assignee, actions, startTime, endTime } = data
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const openMenu = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <React.Fragment>
      <AsideBlock height={size} key={id}>
        <AsideItem>
          <Name>{_.upperFirst(name)}</Name>
          {assignee && !_.isEmpty(assignee) ? (
            <Users data={assignee} size={18} />
          ) : (
            <TotalTime>
              <AlarmOnIcon sx={{ fontSize: 'inherit' }} />{' '}
              {FORMAT_DURATION(CALCULATE_DURATION(startTime, endTime))}
            </TotalTime>
          )}
        </AsideItem>

        <IconButton
          aria-label="Open actions"
          component="label"
          aria-controls={openMenu ? id : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? 'true' : undefined}
          onClick={handleClick}
          size="small"
        >
          <MoreVertIcon sx={{ fontSize: 17, color: '#2d3843' }} />
        </IconButton>
      </AsideBlock>

      <Menu
        id={id}
        aria-labelledby={id}
        anchorEl={anchorEl}
        open={openMenu && !_.isEmpty(actions)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {actions?.map(({ text, onClick: handleActionClick }, index) => {
          return (
            <MenuItem onClick={handleActionClick} key={index} dense>
              {_.upperFirst(text)}
            </MenuItem>
          )
        })}
      </Menu>
    </React.Fragment>
  )
}

export default JobInfo

import * as React from 'react'
import _ from 'lodash'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Timeline from './Modules/Timeline'
import Mayday from './Components/Mayday'
import { ITimeline } from './Utils'
interface IProps {
  collection: ITimeline | null | undefined
}

const Scheduler = ({ collection }: IProps): JSX.Element => {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          // mode: prefersDarkMode ? "dark" : "light", // TODO
        },
      }),
    []
  )

  if (!collection || _.isEmpty(collection)) {
    return <Mayday />
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Timeline collection={collection} />
    </ThemeProvider>
  )
}

export default Scheduler

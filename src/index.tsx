import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Timeline from './Modules/Timeline'
import { ITimeline } from './Utils'
interface IProps {
  collection: ITimeline
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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Timeline collection={collection} />
    </ThemeProvider>
  )
}

export default Scheduler

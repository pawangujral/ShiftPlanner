import * as React from 'react'
import _ from 'lodash'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Planner from './Modules/Planner'
import Mayday from './Components/Mayday'
import { IPlanner } from './Utils'
interface IProps {
  data: IPlanner | null | undefined
}

const Scheduler = ({ data }: IProps): JSX.Element => {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          // mode: prefersDarkMode ? "dark" : "light", // TODO
        },
      }),
    []
  )

  if (!data || _.isEmpty(data)) {
    return <Mayday />
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Planner data={data} />
    </ThemeProvider>
  )
}

export default Scheduler

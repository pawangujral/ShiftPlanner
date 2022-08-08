import * as React from 'react';
import _ from 'lodash';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DateGroup from './../../Components/DateGroup';
import { IZoom } from './../../Utils';
import MenuIcon from '@mui/icons-material/Menu';
import DataObjectIcon from '@mui/icons-material/DataObject';
import Dialog from '@mui/material/Dialog';
import type { IPlanner } from './../../Utils';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import JSONPretty from 'react-json-pretty';

interface IProps {
  data: IPlanner;
  zoom: IZoom;
  unit: number;
  disabled: boolean;
  handleToggleZoom: (type: 'increase' | 'decrease') => void;
  handleToggle: () => void;
  handlePrevDateChange?: (event: React.MouseEvent<HTMLElement>) => void;
  handleNextDateChange?: (event: React.MouseEvent<HTMLElement>) => void;
}

const JSONViewerTheme = {
  main: 'line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;',
  error: 'line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;',
  key: 'color:#f92672;',
  string: 'color:#fd971f;',
  value: 'color:#a6e22e;',
  boolean: 'color:#ac81fe;',
};

const Actions = ({
  data,
  disabled,
  zoom,
  unit,
  handleToggle,
  handleToggleZoom,
  handlePrevDateChange,
  handleNextDateChange,
}: IProps): JSX.Element => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const previewData = data.metaData?.rawData
    ? JSON.parse(data.metaData.rawData)
    : data;

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-start">
            <Tooltip title="Toggle sidebar" placement="top" arrow>
              <span>
                <IconButton
                  size="small"
                  color="inherit"
                  onClick={handleToggle}
                  disabled={disabled}
                >
                  <MenuIcon />
                </IconButton>
              </span>
            </Tooltip>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <DateGroup
            metaData={data.metaData}
            handlePrevDateChange={handlePrevDateChange}
            handleNextDateChange={handleNextDateChange}
          />
        </Grid>
        <Grid item xs={4}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Tooltip title="Raw data" placement="top" arrow>
              <span>
                <IconButton
                  size="small"
                  color="inherit"
                  onClick={() => setOpen(true)}
                  disabled={disabled}
                >
                  <DataObjectIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Zoom In" placement="top" arrow>
              <span>
                <IconButton
                  size="small"
                  color="inherit"
                  onClick={() => handleToggleZoom('increase')}
                  disabled={unit === zoom.max || disabled}
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Zoom Out" placement="top" arrow>
              <span>
                <IconButton
                  size="small"
                  color="inherit"
                  onClick={() => handleToggleZoom('decrease')}
                  disabled={unit === zoom.min || disabled}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
              </span>
            </Tooltip>
          </Stack>
        </Grid>
      </Grid>

      <Dialog open={isOpen} onClose={() => setOpen(false)} maxWidth="lg">
        <DialogTitle>Raw Data</DialogTitle>
        <DialogContent dividers>
          <JSONPretty data={previewData} theme={JSONViewerTheme}></JSONPretty>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default Actions;

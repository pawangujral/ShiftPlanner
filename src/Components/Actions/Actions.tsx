import * as React from "react";
import _ from "lodash";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DateGroup from "./../../Components/DateGroup";
import { IZoom } from "./../../Utils";
import MenuIcon from "@mui/icons-material/Menu";
import DataObjectIcon from "@mui/icons-material/DataObject";
import Dialog from "@mui/material/Dialog";
import type { IPlanner } from "./../../Utils";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import JSONPretty from "react-json-pretty";

interface IProps {
  data: IPlanner;
  zoom: IZoom;
  unit: number;
  disabled: boolean;
  handleToggleZoom: (type: "increase" | "decrease") => void;
  handleToggle: () => void;
}

const JSONViewerTheme = {
  main: "line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;",
  error: "line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;",
  key: "color:#f92672;",
  string: "color:#fd971f;",
  value: "color:#a6e22e;",
  boolean: "color:#ac81fe;",
};

const Actions = ({
  data,
  disabled,
  zoom,
  unit,
  handleToggle,
  handleToggleZoom,
}: IProps): JSX.Element => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const previewData = data.metaData?.rawData
    ? JSON.parse(data.metaData.rawData)
    : data;

  return (
    <>
      <Grid container spacing={2} mb={2} mt={1}>
        <Grid item xs={4}>
          <Tooltip title="Toggle sidebar" placement="top" arrow>
            <span>
              <IconButton
                size="small"
                color="info"
                onClick={handleToggle}
                disabled={disabled}
              >
                <MenuIcon />
              </IconButton>
            </span>
          </Tooltip>
        </Grid>
        <Grid item xs={4}>
          <DateGroup metaData={data.metaData} disabled={disabled} />
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
                  color="info"
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
                  color="info"
                  onClick={() => handleToggleZoom("increase")}
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
                  color="info"
                  onClick={() => handleToggleZoom("decrease")}
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
    </>
  );
};

export default React.memo(Actions);

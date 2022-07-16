import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

export const ScheduleContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "width",
})<{ width: number; count: number; unit: number }>(
  ({ width, count, unit }) => ({
    width: `calc(${width}px * ${count} * ${unit})`,
  })
);

export const TimelineBlock = styled("div", {
  shouldForwardProp: (prop) => prop !== "gridSize",
})<{
  gridSize: { width: number; height: number };
}>(({ gridSize }) => ({
  height: gridSize.height,

  "&:first-child": {
    "[data-type=GridColumn]": {
      overflow: "visible",
    },
  },

  "&:last-child": {
    borderBottom: 0,
  },
}));

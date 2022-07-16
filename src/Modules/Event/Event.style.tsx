import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

export const EventContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "width" && prop !== "left",
})<{ width: number; left: number; count: number }>(
  ({ width, left, count }) => ({
    position: "absolute",
    zIndex: 1,
    width: width,
    left: left,
    "&:before": {
      content: "attr(data-title)",
      fontSize: 12,
      position: "absolute",
      top: -5,
    },

    "[data-class='focusedEvent']:hover": {
      width: `calc(100% - (${count} - 1) * 5%)`,
    },
    "[data-class='focusedEvent']:not(:hover)": {
      width: "5%",
    },
  })
);

export const Title = styled("h5")({
  margin: 0,
  fontSize: 10,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  letterSpacing: "0.02em",
  color: grey[500],
  textTransform: "uppercase",
  fontWeight: 600,
});

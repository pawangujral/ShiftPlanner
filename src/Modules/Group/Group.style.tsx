import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

export const Container = styled("div", {
  shouldForwardProp: (prop) => prop !== "width" && prop !== "left",
})<{ width: number; left: number }>(({ width, left }) => ({
  position: "absolute",
  zIndex: 1,
  width: width,
  left: left,
  cursor: "pointer",
  "&:before": {
    content: "attr(data-title)",
    fontSize: 12,
    position: "absolute",
    top: -5,
  },
}));

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

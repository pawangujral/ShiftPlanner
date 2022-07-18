import { styled } from "@mui/system";
import { orange } from "@mui/material/colors";

export const IndicatorBlock = styled("span", {
  shouldForwardProp: (prop) => prop !== "position",
})<{
  position: number;
}>(({ position }) => ({
  display: "block",
  width: 1,
  height: "100%",
  backgroundColor: orange[300],
  position: "absolute",
  top: 0,
  left: position,
  opacity: ".8",
  zIndex: 9,

  "&:before": {
    content: '""',
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderTop: `5px solid ${orange[300]}`,
    position: "absolute",
    top: 0,
    left: -5,
  },
}));

export const Title = styled("small")({
  position: "absolute",
  top: 12,
  padding: ".2em",
  backgroundColor: orange[300],
  fontSize: 8,
});

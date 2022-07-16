import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

export const Current = styled("div")({
  fontWeight: "700",
  textAlign: "center",
});

export const Location = styled("small")({
  display: "block",
  fontSize: 8,
  color: grey[500],
});

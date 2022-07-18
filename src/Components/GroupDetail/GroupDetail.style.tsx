import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

export const Container = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  width: 400,
}));

export const Title = styled("h6")(({ theme }) => ({
  margin: 0,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  color: theme.palette.primary.main,
}));

export const Info = styled("small")({
  margin: "0 0 .5em 0",
  display: "flex",
  alignItems: "center",
  fontSize: "10px",
  color: grey[600],

  ".MuiSvgIcon-root": {
    // color: theme.palette.primary.main,
  },
});

import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

export const AsideContainer = styled("aside")({
  margin: "15px 0 0 0",
});

export const AsideBlock = styled("div")<{
  height: number;
}>(({ height }) => ({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid",
  borderRight: "1px solid",
  borderColor: grey[200],
  height: height,
  padding: ".5em",
  alignItems: "center",
  transition: "all .2s ease",
  "&:last-of-type": {
    borderBottom: 0,
  },
}));

export const AsideItem = styled("div")({
  width: "80%",
});

export const Footer = styled("footer")({
  margin: 0,
  fontSize: 11,

  span: {
    marginRight: 10,
    color: grey[600],
  },
});

export const Title = styled("h5")({
  fontSize: 12,
  fontWeight: 500,
  margin: 0,
  color: grey[800],
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  small: {
    display: "block",
    color: grey[700],
  },
});
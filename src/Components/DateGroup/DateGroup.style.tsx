import { styled } from "@mui/system";

export const Current = styled("div")({
  fontWeight: "700",
  textAlign: "center",
});

export const Location = styled("small")(({ theme }) => ({
  display: "block",
  fontSize: 8,
  color: theme.palette.primary.main,
}));

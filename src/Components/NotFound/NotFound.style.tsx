import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

export const ImageBlock = styled("div")({
  maxWidth: 300,
  margin: "5em auto",
  image: {
    filter:
      "invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%)",
  },
});

export const Title = styled("p")({
  color: grey[800],
  textAlign: "center",
  marginTop: "3em",
  fontWeight: 700,
});

export const ImageContainer = styled("img")({
  width: "100%",
  height: "100%",
});

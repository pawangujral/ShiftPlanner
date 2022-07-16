import * as React from "react";

import NotFoundImage from "./../../Assets/not-found.svg";
import { ImageBlock, Title, ImageContainer } from "./NotFound.style";

const defaultMessage = "Mayday Mayday! .... No data found.";

interface IProps {
  message?: string;
}

const NotFound = ({ message = defaultMessage }: IProps): JSX.Element => (
  <ImageBlock>
    <picture>
      <ImageContainer src={NotFoundImage} alt="data not found" />
    </picture>
    <Title>{message}</Title>
  </ImageBlock>
);

export default NotFound;

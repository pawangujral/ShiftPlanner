import * as React from "react";

import { ImageBlock, Title } from "./Mayday.style";

const defaultMessage = "Mayday Mayday! .... No data found.";

interface IProps {
  message?: string;
}

const Mayday = ({ message = defaultMessage }: IProps): JSX.Element => (
  <ImageBlock>
    {/* <picture>
      <ImageContainer src="notfound.svg" alt="data not found" />
    </picture> */}
    <Title>{message}</Title>
  </ImageBlock>
);

export default Mayday;

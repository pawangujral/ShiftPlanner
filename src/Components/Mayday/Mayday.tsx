import * as React from 'react';

import { ImageBlock, ImageContainer, Title } from './Mayday.style';
import notfound from './../../Assets/not-found.svg';

const defaultMessage = 'Mayday Mayday! .... No data found.';

interface IProps {
  message?: string;
}

const Mayday = ({ message }: IProps): JSX.Element => (
  <ImageBlock>
    <ImageContainer>
      <img src={notfound} />
    </ImageContainer>
    <Title>{message ?? defaultMessage}</Title>
  </ImageBlock>
);

export default Mayday;

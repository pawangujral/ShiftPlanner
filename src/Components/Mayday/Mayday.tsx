import * as React from 'react';

import { ImageBlock, Title } from './Mayday.style';

const defaultMessage = 'Mayday Mayday! .... No data found.';

interface IProps {
  message?: string;
}

const Mayday = ({ message }: IProps): JSX.Element => (
  <ImageBlock>
    <Title>{message ?? defaultMessage}</Title>
  </ImageBlock>
);

export default Mayday;

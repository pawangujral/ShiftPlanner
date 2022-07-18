import * as React from "react";
import { IndicatorBlock, Title } from "./Indicator.style";
import { CALCULATE_BLOCK_POSITION } from "./../../Utils";
import moment from "moment";

interface IProps {
  unit: number;
}

const INTERVAL_TIME = 60; //* in sec

const Indicator = ({ unit }: IProps): JSX.Element => {
  const [currentTime, setCurrentTime] = React.useState<string>();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("HH:mm:ss"));
    }, INTERVAL_TIME);

    return () => clearInterval(interval);
  }, []);

  return (
    <IndicatorBlock
      position={CALCULATE_BLOCK_POSITION(moment().format(), unit)}
    >
      <Title>{currentTime}</Title>
    </IndicatorBlock>
  );
};

export default Indicator;

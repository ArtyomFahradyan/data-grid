import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { SpinnerWrapper, RelativeWrapper } from "./styles";

type Props = {
  relative?: boolean;
  size?: number;
};

function Spinner({ relative }: Props) {
  const Loading = (
    <SpinnerWrapper>
      <CircularProgress />
    </SpinnerWrapper>
  );

  if (relative) {
    return <RelativeWrapper>{Loading}</RelativeWrapper>;
  }
  return Loading;
}

export default Spinner;

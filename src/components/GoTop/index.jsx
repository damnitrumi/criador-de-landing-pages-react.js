import * as Styled from "./styles";
import { KeyboardArrowUp } from "@styled-icons/material-outlined/KeyboardArrowUp";

export const GoTop = () => {
  return (
    <Styled.Container href="#" aria-label="Go To Top" title="Go To Top">
      <KeyboardArrowUp />
    </Styled.Container>
  );
};

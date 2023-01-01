import { useState } from "react";
import { Aside } from "../../Components/Aside";
import { SquareTag } from "../../Components/SquareTag";
import * as S from "./style";

export const Home = () => {
  return (
    <S.mainFlex>
      <SquareTag />
      <Aside />
    </S.mainFlex>
  );
};

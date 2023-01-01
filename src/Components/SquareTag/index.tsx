import { Children, useContext } from "react";
import { CreateContext } from "../../context";
import * as S from "./style";

export const SquareTag = () => {
  const { inputValue, color } = useContext(CreateContext);

  return (
    <S.SquareBord>
      {inputValue === "<header>" ? (
        <header
          style={{
            background: color,
          }}
        >
          Entrei no header
        </header>
      ) : (
        <></>
      )}
    </S.SquareBord>
  );
};

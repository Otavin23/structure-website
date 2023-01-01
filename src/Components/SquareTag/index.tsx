import { useContext } from "react";
import { CreateContext } from "../../context";
import * as S from "./style";

export const SquareTag = () => {
  const { createTag, dataOptions, editoMap } = useContext(CreateContext);

  console.log(editoMap);
  return (
    <S.SquareBord>
      {createTag ? (
        <header
          style={{
            background: dataOptions.color,
            width: dataOptions.width,
            height: dataOptions.height,
            border: editoMap ? "2px solid#a5cbec" : "transparent",
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

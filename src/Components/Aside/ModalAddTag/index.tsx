import {
  HTMLAttributeAnchorTarget,
  HtmlHTMLAttributes,
  JSXElementConstructor,
  useContext,
} from "react";
import { CreateContext } from "../../../context";
import * as S from "./style";

interface ModalsProps {
  closeModal: () => void;
}

export const ModalAddTag = ({ closeModal }: ModalsProps) => {
  const { setInputValue, inputValue } = useContext(CreateContext);

  return (
    <S.ModalBg>
      <input
        type="text"
        placeholder=""
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
        }}
      />
      <button>CreateTag</button>
      <button onClick={() => closeModal()}>x</button>
    </S.ModalBg>
  );
};

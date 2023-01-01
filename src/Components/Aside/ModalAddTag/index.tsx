import { useContext, useState } from "react";
import { CreateContext } from "../../../context";
import * as S from "./style";

interface ModalsProps {
  closeModal: () => void;
}

export const ModalAddTag = ({ closeModal }: ModalsProps) => {
  const { setInputValue, inputValue, setCreateTag, setEditorMap } =
    useContext(CreateContext);
  const [errorSearch, setError] = useState(false);

  return (
    <S.ModalBg>
      <input
        type="text"
        placeholder=""
        style={{
          borderColor: errorSearch ? "red" : "transparent",
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (inputValue === "header") {
            setCreateTag(true);
            setEditorMap(true);
            closeModal();
          }
          if (!inputValue) setError(true);
        }}
      >
        CreateTag
      </button>
      <button onClick={() => closeModal()}>x</button>
    </S.ModalBg>
  );
};

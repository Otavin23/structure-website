import { useContext, useState } from "react";
import { CreateContext } from "../../context";
import { ModalAddTag } from "./ModalAddTag";
import * as S from "./style";

export const Aside = () => {
  const [openModal, setOpenModal] = useState(false);
  const { setColor, color } = useContext(CreateContext);

  console.log(color);
  return (
    <S.bgAside>
      <S.UlList>
        <li>
          W:
          <input type="number" />
        </li>
        <li>
          H:
          <input type="number" />
        </li>
        <li>
          Color:
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setColor(e.target.value)
            }
          />
        </li>
      </S.UlList>
      <button>trocar</button>
      <button onClick={() => setOpenModal(true)}>Construct</button>
      {openModal && <ModalAddTag closeModal={() => setOpenModal(false)} />}
    </S.bgAside>
  );
};

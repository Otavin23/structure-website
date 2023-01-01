import { useContext, useState } from "react";
import { CreateContext } from "../../context";
import { ModalAddTag } from "./ModalAddTag";
import * as S from "./style";

export const Aside = () => {
  const [openModal, setOpenModal] = useState(false);
  const { setDataOptions, dataOptions } = useContext(CreateContext);

  console.log(dataOptions);

  return (
    <S.bgAside>
      <S.UlList>
        <li>
          W:
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDataOptions({
                ...dataOptions,
                width: e.target.value,
              })
            }
          />
        </li>
        <li>
          H:
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDataOptions({
                ...dataOptions,
                height: e.target.value,
              })
            }
          />
        </li>
        <li>
          Color:
          <input
            type="color"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDataOptions({
                ...dataOptions,
                color: e.target.value,
              })
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

import { ListTags } from "./ListTags";
import { ButtonStart } from "./ButtonStart";

export const Aside = () => {
  return (
    <aside className="bg-black fixed h-full w-[12rem] flex-col justify-between	flex p-[2rem] rounded-br-lg rounded-tr-lg ">
      <ListTags />
      <ButtonStart />
    </aside>
  );
};

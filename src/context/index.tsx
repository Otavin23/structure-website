import { createContext, ReactNode, useState } from "react";

export const CreateContext = createContext({});

interface ValuesPropos {
  children: ReactNode;
  setInputValue: (props: string) => void;
  inputValue: string;
  setColor: (props: string) => void;
  color: string;
}

export function ProviderValues({ children }: ValuesPropos) {
  const [inputValue, setInputValue] = useState<string>("");
  const [color, setColor] = useState("#fff");

  const valor: ValuesPropos = {
    setInputValue,
    inputValue,
    setColor,
    color,
  };

  return (
    <CreateContext.Provider value={valor}>{children}</CreateContext.Provider>
  );
}

import { createContext, ReactNode, useState } from "react";

export const CreateContext = createContext({} as ValuesPropos);

interface ValuesPropos {
  setInputValue: (props: string) => void;
  setCreateTag: (props: boolean) => void;
  setDataOptions: (props: any) => void;
  setEditorMap: (props: any) => void;

  inputValue: string;
  dataOptions: any;
  createTag: boolean;
  editoMap: boolean;
}

interface ProviderProps {
  children: ReactNode;
}

export function ProviderValues({ children }: ProviderProps) {
  const [inputValue, setInputValue] = useState("");
  const [createTag, setCreateTag] = useState(false);
  const [dataOptions, setDataOptions] = useState({
    width: 0,
    height: 0,
    color: "",
  });
  const [editoMap, setEditorMap] = useState(false);

  const valor: ValuesPropos = {
    setInputValue,
    inputValue,
    setCreateTag,
    createTag,
    setDataOptions,
    dataOptions,
    setEditorMap,
    editoMap,
  };

  return (
    <CreateContext.Provider value={valor}>{children}</CreateContext.Provider>
  );
}

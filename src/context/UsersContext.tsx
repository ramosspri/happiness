import React, { Dispatch, SetStateAction } from 'react';
import { useModal } from '../componentes/Modal';
import axios from 'axios';

export interface UsersType {
  id: string | null;
  nome: string;
  email: string;
  telefone: number;
  stacks: [
    {
      language: string;
      framework: string;
    },
    {
      language: string;
      framework: string;
    },
  ];
}

export interface InputType {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  language1: string;
  framework1: string;
  language2: string;
  framework2: string;
}

interface UserContextProperties {
  children: React.ReactNode;
}

interface UsersContextType {
  input: InputType;
  setInput: React.Dispatch<React.SetStateAction<InputType>>;
  mostra: boolean;
  toggle: () => void;
  users: UsersType[];
  mudanca: boolean;
  setMudanca: Dispatch<SetStateAction<boolean>>;
  clicou: boolean;
  setClicou: Dispatch<SetStateAction<boolean>>;
  loader: boolean;
  setLoader: Dispatch<SetStateAction<boolean>>;
  id: string;
  setId: Dispatch<SetStateAction<string>>;
}

export const UsersContext = React.createContext({} as UsersContextType);

export const UsersProvider = ({ children }: UserContextProperties) => {
  const [users, setUsers] = React.useState([]);
  const [input, setInput] = React.useState<InputType>({
    id: '',
    nome: '',
    email: '',
    telefone: '',

    language1: '',
    framework1: '',

    language2: '',
    framework2: '',
  });
  const { mostra, toggle } = useModal();
  const [mudanca, setMudanca] = React.useState(false);
  const [clicou, setClicou] = React.useState(false);
  const handleSetUsers = React.useCallback((data) => {
    setUsers(data);
  }, []);
  const [loader, setLoader] = React.useState(false);

  const [id, setId] = React.useState('');
  const getUsers = async () => {
    setLoader(true);
    const { data } = await axios.get('http://localhost:3000/users');
    setUsers(data);
    handleSetUsers(data);
    setMudanca(false);
    setLoader(false);
  };

  React.useEffect(() => {
    getUsers();
  }, [mudanca]);

  return (
    <UsersContext.Provider
      value={{
        input,
        setInput,
        mostra,
        toggle,
        users,
        mudanca,
        setMudanca,
        clicou,
        setClicou,
        loader,
        setLoader,
        id,
        setId,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

// Essa função automatiza o processo de usar o contexto criado por mim.
export function useCreateContext() {
  const context = React.useContext(UsersContext);
  return context;
}

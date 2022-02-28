import React from 'react';

export interface UsersType {
  nome: string;
  email: string;
  telefone: number;
  stacks: [
    {
      language1: string;
      framework1: string;
    },
    {
      language2: string;
      framework2: string;
    },
  ];
}

export interface InputType {
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
}
export const UsersContext = React.createContext({} as UsersContextType);

export const UsersProvider = ({ children }: UserContextProperties) => {
  const [users, setUsers] = React.useState();
  const [input, setInput] = React.useState<InputType>({
    nome: '',
    email: '',
    telefone: '',

    language1: '',
    framework1: '',

    language2: '',
    framework2: '',
  });

  return (
    <UsersContext.Provider value={{ input, setInput }}>
      {children}
    </UsersContext.Provider>
  );
};

// Essa função automatiza o processo de usar o contexto criado por mim.
export function useCreateContext() {
  const context = React.useContext(UsersContext);
  return context;
}

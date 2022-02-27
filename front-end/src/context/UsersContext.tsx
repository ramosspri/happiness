import React from 'react';

export interface UsersType {
  id: number | null;
  nome: string;
  email: string;
  telefone: number | null;
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

interface UserContextProperties {
  children: React.ReactNode;
}

interface UsersContextType {
  input: UsersType;
  setInput: React.Dispatch<React.SetStateAction<UsersType>>;
}
export const UsersContext = React.createContext({} as UsersContextType);

export const UsersProvider = ({ children }: UserContextProperties) => {
  const [users, setUsers] = React.useState();
  const [input, setInput] = React.useState<UsersType>({
    id: null,
    nome: '',
    email: '',
    telefone: null,
    stacks: [
      {
        language1: '',
        framework1: '',
      },
      {
        language2: '',
        framework2: '',
      },
    ],
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

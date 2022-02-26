import React from 'react';
export interface UsersType {
  id: string;
  name: string;
  email: string;
  telefone: string;
  linguagem1: string;
  linguagem2: string;
  frameworks1: string;
  frameworks2: string;
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
    id: '',
    name: '',
    email: '',
    telefone: '',
    linguagem1: '',
    linguagem2: '',
    frameworks1: '',
    frameworks2: '',
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

import { Children, createContext, ReactNode, useState } from "react";

interface IUserProviderProps {
  children: ReactNode;
}

type userContextData = {
  aluno: string;
  qtdAlunos: number;
  mudaNome: (nome: string) => void;
};

export const UserContext = createContext({} as userContextData);

function UserProvider({ children }: IUserProviderProps) {
  const [aluno, setAluno] = useState("Alex Rodrigues");
  const [qtdAlunos, setQtdAlunos] = useState(20);

  function mudaNome(nome: string) {
    setAluno(nome);
  }

  return (
    <UserContext.Provider value={{ aluno, qtdAlunos, mudaNome }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

import { Children, createContext, ReactNode, useState } from "react";

interface IUserProviderProps {
  children: ReactNode;
}

type userContextData = {
  aluno: string;
  qtdAlunos: number;
  mudaNome: (nome: string) => void;
  novoAluno: () => void;
};

export const UserContext = createContext({} as userContextData);

function UserProvider({ children }: IUserProviderProps) {
  const [aluno, setAluno] = useState("Alex Rodrigues");
  const [qtdAlunos, setQtdAlunos] = useState(20);

  function mudaNome(nome: string) {
    setAluno(nome);
  }

  function novoAluno() {
    //Eu pego a quantidade existente e alunos e adiciono main um
    setQtdAlunos((alunos) => alunos + 1);
  }

  return (
    <UserContext.Provider value={{ aluno, qtdAlunos, mudaNome, novoAluno }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

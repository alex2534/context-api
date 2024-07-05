import { useContext } from "react";
import { UserContext } from "../../context/user";

export function Footer() {
  const { qtdAlunos, novoAluno } = useContext(UserContext);
  return (
    <footer>
      <hr />
      <h4>Footer</h4>
      <h4>Alunos online plataforma: {qtdAlunos}</h4>
      <br />
      <button
        onClick={() => {
          novoAluno();
        }}
      >
        Hovo aluno
      </button>
    </footer>
  );
}

import { useContext } from "react";
import { Nome } from "../nome";
import { UserContext } from "../../context/user";

export function Alunos() {
  const { qtdAlunos, mudaNome } = useContext(UserContext);

  return (
    <div>
      <h3>Quantidade de alunos: {qtdAlunos}</h3>
      <button onClick={() => mudaNome("Livia Helena")}>Mudar nome</button>
      <br />
      <br />
      <Nome />
    </div>
  );
}

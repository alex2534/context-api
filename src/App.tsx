import { useState } from "react";
import { Alunos } from "./components/alunos";
import UserProvider from "./context/user";

function App() {
  const [count, setCount] = useState("Sujeito programador");

  return (
    <UserProvider>
      <>
        <h1>Ecola Dev</h1>
        <br />
        <hr />
        <Alunos />
      </>
    </UserProvider>
  );
}

export default App;

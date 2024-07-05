import { useState } from "react";
import { Alunos } from "./components/alunos";
import UserProvider from "./context/user";
import { Footer } from "./components/footer";

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
      <Footer />
    </UserProvider>
  );
}

export default App;

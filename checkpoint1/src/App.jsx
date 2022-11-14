import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [nomeCor, setnomeCor] = useState("");
  const [mudaCor, setMudaCor] = useState("");
  const [cor, setCor] = useState([]);

  // filme = {
  //   title: "A Lagoa Azul",
  //   url: "http://filme.png",
  // };

  function salvarCor() {
    nomeCor === "" || mudaCor === ""
      ? alert("Preencha os dados do campo")
      : setCor([
          ...cor,
          {
            color: nomeCor,
            changeColor: mudaCor,
          },
        ]);

    setnomeCor("");
    setMudaCor("");
  }

  return (
    <div className="App">
      {/* <h1>Cadastro de Filmes</h1> */}
      <form>
        <h2>ADICIONAR NOVA COR</h2>
        <span className="nomeInput">Nome</span>
        <input
          value={nomeCor}
          onChange={(e) => setnomeCor(e.target.value)}
          required
          minlength="3"
        />
        <span className="corInput">Cor</span>
        <input
          placeholder="Insira sua cor no formato Hexadecimal"
          value={mudaCor}
          onChange={(e) => setMudaCor(e.target.value)}
          required
          minlength="3"
        />
        <button type="button" onClick={salvarCor}>
          Salvar
        </button>
      </form>

      <h2 className="divName">CORES FAVORITAS</h2>

      {/* <div>{JSON.stringify(filmes, null)}</div> */}
      {cor.map((cor) => {
        return (
          <div className="container">
            <div className="card" style={{ background: "#" + cor.changeColor }}>
              <h1 className="hexaName">{cor.color}</h1>
              <h2 className="hexaCard">{"#" + cor.changeColor}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;

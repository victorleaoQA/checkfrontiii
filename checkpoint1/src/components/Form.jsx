import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <>

     {/* <h1>Cadastro de Filmes</h1> */}
     <form>
    <h2>ADICIONAR NOVA COR</h2>
    <span className="nomeInput">Nome</span>
    <input value={nomeCor} onChange={(e) => setnomeCor(e.target.value)} required minlength="3" />
    <span className="corInput">Cor</span>
    <input
      placeholder="Insira sua cor no formato Hexadecimal"
      value={mudaCor}
      onChange={(e) => setMudaCor(e.target.value)}
      required minlength="3"
    />
    <button type="button" onClick={salvarCor}>
      Salvar
    </button>
  </form>
    
    </>
  )
}

export default Form
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Juan",
      sobrenome: "Carlos"
    };
  }

  alterarNome = () => {
    this.setState({
      nome: "Anderson",
      sobrenome: "Barbosa"
    });
  }
 
    render() {
      return (
        <div>
       <h1>Nome:{this.state.nome}</h1>
       <h1>Sobrenome:{this.state.sobrenome}</h1>
       <button type="button" onClick={this.alterarNome}> Alterar Nome Completo</button>
       </div>
      
      );
    }
}

export default App;

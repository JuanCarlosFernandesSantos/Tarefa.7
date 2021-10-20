import React from "react";

class Nome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Nome: [
                { nome: "Janaine" },
                { nome: "Ana" },
                { nome: "Maria" }
            ]
        };
    }

    cmd_click = () => {
        this.setState({
            Nome: [
                { nome: "Cristine" },
                { nome: "Clara" },
                { nome: "Eduarda" }

            ]
    });
}


        render() {
            return (
                <div>
                {this.state.Nome.map((nome) =>
                    <h1>Nome: {nome.nome}</h1>
                )}
                <button type="button" onClick={this.cmd_click}>Alterar</button>
            </div>
            )
        }
      
}
export default Nome;
import { Component } from "react";
import CadastrarNome from "../../services/cadastrar/cadastrarNome";

type state = {
    nome: string;
}

class Inserir extends Component<{}, state>{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            nome: ''
        }
        this.cadastrarNome = this.cadastrarNome.bind(this);
        this.catchNome = this.catchNome.bind(this);
        this.enviarNome = this.enviarNome.bind(this);
    }

    public cadastrarNome(obj: Object) {
        let cadastrar = new CadastrarNome();
        cadastrar.cadastrar(obj);
    }

    public catchNome(evento: any) {
        this.setState({
            nome: evento.target.value
        })
    }

    public enviarNome(evento: any) {
        evento.preventDefault();
        let nome = {nome: this.state.nome}
        this.cadastrarNome(nome)
        this.setState({
            nome: ''
        })
    }

    render() {
        return(
            <>
                <form action="localhost:3000">
                    <label>
                        Nome:
                        <input name="nome" maxLength={50} onChange={this.catchNome} value={this.state.nome}/>
                    </label>
                    <button type="submit" name="action" onClick={this.enviarNome}>Enviar</button>
                </form>
            </>
        )
    }
}

export default Inserir;
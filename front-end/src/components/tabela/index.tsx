import { Component } from "react";
import BuscarNome from "../../services/buscar/buscarNome";
import '../../App.css';

type state = {
    nomes: Object[]
}

class Tabela extends Component<{}, state>{

    constructor(props: {}){
        super(props)
        this.state = { nomes: [] }
    }

    public buscarNomes() {
        let buscarNome = new BuscarNome()
        const nomes = buscarNome.buscar()
        nomes.then(nomes => {
            this.setState({ nomes })
        })
    }

    componentDidMount(): void {
        this.buscarNomes()
    }

    

    render() {
        let lista = this.state.nomes.map(nome => 
                <tbody>
                    <tr key={nome["id"]}>
                        <td className="linha">{ nome["id"] }</td>
                        <td className="linha">{ nome["nome"] }</td>
                    </tr>
                </tbody>
            )
        return(
            <>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    {lista}
                </table>
            </>
        )
    }
}

export default Tabela;
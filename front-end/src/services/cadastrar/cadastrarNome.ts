import { URI } from "../enuns/uri";
import Cadastrar from "./cadastrar";

class CadastrarNome implements Cadastrar {
    cadastrar(objeto: Object): void {
        fetch(URI.ADD_NOME, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    }
}

export default CadastrarNome;
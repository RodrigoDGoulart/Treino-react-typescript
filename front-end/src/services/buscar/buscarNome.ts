import { URI } from "../enuns/uri";
import Buscar from "./buscar";

export default class BuscarNome implements Buscar {
    public async buscar() {
        let json = await fetch(URI.NOMES).then(resposta => resposta.json())
        console.log(json);
        return json
    }
}
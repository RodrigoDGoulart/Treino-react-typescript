import React from "react";
import { Component } from "react";

class Inserir extends Component<{}, {nomes: Object[]}>{
    render() {
        return(
            <>
                <form>
                    <input name="nome" placeholder="Nome" />
                </form>
            </>
        )
    }
}

export default Inserir;
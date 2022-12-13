import React from "react"
import { Table } from "react-bootstrap";


class Funcionarios extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            funcionarios: [
                { 'id': 1, 'nome': 'Neto Fernadez', 'email': 'neto@empresax.com.br' },
                { 'id': 2, 'nome': 'Jonh Travolta', 'email': 'Jonh@travolta.com.br' },
                { 'id': 3, 'nome': 'Eduarda de Andrade', 'email': 'eduardinha@outlook.com' },
                { 'id': 4, 'nome': 'Simon boulevard', 'email': 'simonsomon@gmail.com' },

            ]
        }

    }

    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Email</td>
                        <td>Opções</td>
                    </tr>
                </thead>
                <tbody>

                    {
                        this.state.funcionarios.map((funcionarios) =>
                            <tr>
                                <td>{funcionarios.nome} </td>
                                <td>{funcionarios.email}</td>
                                <td>Atualizar e excluir</td>
                            </tr>
                        )
                    }
                   
                </tbody>
            </Table>
        )

    }

}

export default Funcionarios;

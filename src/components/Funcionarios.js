import React from "react"
import { Table } from "react-bootstrap";


class Funcionarios extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            funcionarios: []
        }

    }

    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Neto </td>
                        <td>neto@empresax.com.br </td>
                    </tr>
                    <tr>
                        <td>Jonh </td>
                        <td>Jonh@travolta.com.br </td>
                    </tr>
                    <tr>
                        <td>Eduardo </td>
                        <td>eduardinho@outlook.oi.br </td>
                    </tr>
                    <tr>
                        <td>Cassandra </td>
                        <td>odissey@gmail.com </td>
                    </tr>
                </tbody>
            </Table>
        )

    }

}

export default Funcionarios;

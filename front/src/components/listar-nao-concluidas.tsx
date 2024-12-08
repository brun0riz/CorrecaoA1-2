import { useEffect, useState } from "react";
import { Tarefa } from "../models/tarefa";

function ListarTarefasNaoConcluidas(){
    
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        carregarTarefas();
    }, []);

    function carregarTarefas(){
        fetch("http://localhost:5000/api/tarefas/naoconcluidas")
        .then(resposta => resposta.json())
        .then((tarefas: Tarefa[]) =>{
            console.table(tarefas);
            setTarefas(tarefas);
        })
    }
    
    
    return(
        <div>
            <h1>Listar Tarefas</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th>Status</th>
                        <th>Criado Em</th>
                        <th>Alterar Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map((tarefa) =>
                        <tr key={tarefa.tarefaID}>
                            <td>{tarefa.tarefaID}</td>
                            <td>{tarefa.titulo}</td>
                            <td>{tarefa.descricao}</td>
                            <td>{tarefa.status}</td>
                            <td>{tarefa.criadoEm}</td>
                        </tr>   
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default ListarTarefasNaoConcluidas;
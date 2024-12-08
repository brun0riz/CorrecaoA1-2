import { useEffect, useState } from "react";
import { Tarefa } from "../models/tarefa";

function ListarTarefas(){
    
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        carregarTarefas();
    }, []);

    function carregarTarefas(){
        fetch("http://localhost:5000/api/tarefas/listar")
        .then(resposta => resposta.json())
        .then((tarefas: Tarefa[]) =>{
            console.table(tarefas);
            setTarefas(tarefas);
        })
    }

    function alterar(id: string){
        console.log(`id: ${id}`);
        fetch(`http://localhost:5000/api/tarefas/alterar/${id}`, {
            method: 'PUT',
        })
        .then((resposta) => resposta.json())
        .then((dados) =>{
            setTarefas(dados);
        });  
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
                    {tarefas.map((tarefa) => (
                        <tr key={tarefa.tarefaID}>
                            <td>{tarefa.tarefaID}</td>
                            <td>{tarefa.titulo}</td>
                            <td>{tarefa.descricao}</td>
                            <td>{tarefa.status}</td>
                            <td>{tarefa.criadoEm}</td>
                            <td>
                                <button onClick={() =>{
                                    alterar(tarefa.tarefaID!);
                                }}
                                >
                                    Alterar
                                </button>
                            </td>
                        </tr>   
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ListarTarefas;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Categoria } from "../models/categoria";
import { Tarefa } from "../models/tarefa";


function CadastrarTarefa(){

    const navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoriaID, setCategoriaID] = useState("");
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    useEffect(() => {
        carregarCategorias();
    }, []);

    function carregarCategorias() {
        fetch("http://localhost:5000/api/categoria/listar")
        .then((resposta) => resposta.json())
        .then((categorias: Categoria[]) => setCategorias(categorias));
    
    }

    function cadastroTarefa(e: any){
        const tarefa : Tarefa ={
            titulo: titulo,
            descricao: descricao,
            categoriaId: categoriaID
        }

        fetch("http://localhost:5000/api/categoria/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tarefa),
        })
        .then((resposta) => {
            return resposta.json();
        })
        .then((tarefa) =>{
            console.log("Tarefa cadastrada com sucesso", tarefa);
        });
    }


    return (
        <div>
            <h1>Cadastrar Tarefa</h1>
            <form onSubmit={cadastroTarefa}>
                <label>Titulo:</label>
                <input
                type="text"
                placeholder="Digite o título da tarefa: "
                onChange={(e) => setTitulo(e.target.value)}
                required
                />
                <br />
                <label>Descrição:</label>
                <input
                type="text"
                placeholder="Digite a descrição da tarefa: "
                onChange={(e) => setDescricao(e.target.value)}
                required
                />
                <br />
                <label>Categoria:</label>
                <select onChange={(e) => setCategoriaID(e.target.value)}>
                {categorias.map((categoria) => (
                    <option
                    value={categoria.categoriaID}
                    key={categoria.categoriaID}
                    >
                        {categoria.nome}
                    </option>
                ))}
                </select>
                <br />
                <button type="submit">Cadastrar</button>
                
            </form>
        </div>
    );
}
export default CadastrarTarefa;
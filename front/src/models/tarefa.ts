import { Categoria } from './categoria';

export interface Tarefa{
    tarefaID?: string;
    titulo: string;
    descricao: string;
    status?: string;
    categoriaId: string;
    categoria?: Categoria;
    criadoEm?: string;
}
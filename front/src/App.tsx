import React from 'react';
import ListarTarefas from './components/listar';
import ListarTarefasConcluidas from './components/listar-concluidas';
import ListarTarefasNaoConcluidas from './components/listar-nao-concluidas';
import CadastrarTarefa from './components/cadastrar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Revisão Dev Web</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to = '/'>Home</Link>
            </li>
            <li>
              <Link to = {"/pages/tarefas/listar"}>
                  Listar Tarefas{" "}
              </Link>
            </li>
            <li>
              <Link to = {"/pages/tarefas/concluidas"}>
                  Listar Tarefas Concluídas{" "}
              </Link>
            </li>
            <li>
              <Link to = {"/pages/tarefas/naoconcluidas"}>
                  Listar Tarefas Não Concluídas{" "}
              </Link>
            </li>
            <li>
              <Link to = {"/pages/tarefas/cadastrar"}>
                  Cadastrar uma tarefa{" "}
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path = "/" element= {<ListarTarefas />} />
          <Route path = "/pages/tarefas/listar" element= {<ListarTarefas />} />
          <Route path = "/pages/tarefas/concluidas" element= {<ListarTarefasConcluidas />} />
          <Route path = "/pages/tarefas/naoconcluidas" element= {<ListarTarefasNaoConcluidas />} />
          <Route path = "/pages/tarefas/cadastrar" element= {<CadastrarTarefa />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

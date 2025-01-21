import React, { useState } from 'react';
import './Todo.css';
import Icone from './assets/toDoImage.png';

function Todo() {

  const [lista, setLista] = useState([]);
  const [novoIten, setNovoIten] = useState("");

const listaStorage = localStorage.getItem('lista'); 

  
  function adicionarItem(form) {
    form.preventDefault();
    if (!novoIten) {
      return;
    }
    setLista([...lista, { text: novoIten, isComplited: false }]);
    setNovoIten("");
    document.getElementById('input-entrada').focus();
  }

  function clicou(index) {
    const listaAux = [...lista];
    listaAux[index].isComplited = !listaAux[index].isComplited;
    setLista(listaAux);
  }

  function deleta(index) {
    const listaAux = [...lista];
    listaAux.splice(index, 1);
    setLista(listaAux);
  }

  function deletaTudo() {
    setLista([]);
  }

  return (
    <div className="todo-wrapper">
      <h1>Listagem Tarefas</h1>

      <form onSubmit={adicionarItem}>
        <input
          id='input-entrada'
          type="text"
          value={novoIten}
          onChange={(e) => { setNovoIten(e.target.value) }}
          placeholder="Adicione uma tarefa"
        />
        <button className="button-add" type="submit">Add</button>
      </form>

      <div className="listaTarefas">

        {
          lista.length < 1
            ?
            <img className='imagemCentral' src={Icone} />
            :
            lista.map((item, index) => (
              <div className={item.isComplited ? "item completo" : "item"} key={index}>
                <span onClick={() => { clicou(index) }}>{item.text}</span>
                <button onClick={() => { deleta(index) }} className="button-remove">Remover</button>
              </div>
            ))
        }
        {
          lista.length > 0 &&
          <button onClick={deletaTudo} className='deleteAll'> Deletar Todos</button>
        }

      </div>

    </div>
  );
}

export default Todo;

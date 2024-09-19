// // componente principal -- precisa ter estado
// // esse componente vai ser uma classe

// import React, { Component } from 'react';


// // render() - precisa desse metodo para renderizar algo na tela
// export default class Main extends Component {
//   //o props é as propriedades
//   constructor(props) { // quando vc tem uma classe que herda de outra classe, vc tem que usar o super
//     super(props);
//     this.state = { // variavel de estado
//       novaTarefa: '',
//     };

//     this.inputMudou = this.inputMudou.bind(this);
//   }
//   // esse constructor foi criado para criar a variavel de estado
//   inputMudou(e) { // recebe um evento
//     this.setState({
//       novaTarefa: e.target.value, // o target é o input
//     });
//   }

//   render() {
//     const { novaTarefa } = this.state;
//     return (
//       <div className='main'>
//         <h1>{ novaTarefa }</h1>
//         <form action="#">
//           <input onChange={this.inputMudou} type="text" />
//           <button type='submit'>Enviar</button>
//         </form>
//       </div>
//     );
//   }
// }

// SEGUNDO EXEMPLO - MAIS FÁCIL

import React, { Component } from 'react';
// form
import { FaPlus } from 'react-icons/fa';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';
export default class Main extends Component { // CLASS FIELDS
  state = {
    novaTarefa: '',
    tarefas: [ ],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim(); // o trim elimina os espaços do começo e do fim
  // indice -1 quer dizer que o elemento não existe
  if (tarefas.indexOf(novaTarefa) !== -1) return;
const novaTarefas = [...tarefas];
this.setState({
  tarefas: [...novaTarefas, novaTarefa],
});

  }
  handleChange = (e) =>  {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  handleEdit = (e, index ) => {

  }
  handleDelete = (e, index ) => {

  }

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className='main'>
        <h1> Lista de Tarefas </h1>
        <form onSubmit={this.handleSubmit} action="#" className='form'>
          <input onChange={this.handleChange}
          type="text"
          value={ novaTarefa } />
          <button type='submit'>
            <FaPlus/>
          </button>
        </form>
        <ul className='tarefas'>
        {tarefas.map((tarefa, index) => (
          <li key={ tarefa }> { tarefa }
          <span>
           <FaEdit onClick={(e) => this.handleEdit(e, index)} className='edit'/>
           <FaWindowClose onClick={(e) => this.handleEdit(e, index)} className='delete'/>
          </span>
          </li>
        ))}
        </ul>
      </div>
    );
  }
}

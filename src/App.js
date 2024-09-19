import React from 'react';
import Main from './components/Main';
import './App.css';
// export default function App() {
//   return <h1>Hello World!</h1>
// }

// Pode usar as duas formas
function App() {
  return <Main />;
  // <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
}
// não pode retornar mais de dois elementos (h1, p), por isso dá erro
// mas se voce envolver os elementos em uma div vc consegue retornar

// function App() {
//   return
//<div>
//<h1>Hello World!</h1>
//<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
//</div>
// }

// ou vc pode criar um fragmento que é um elemento vazio
// function App() {
//   return
//<>
//<h1>Hello World!</h1>
//<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
//</>
// }
export default App;

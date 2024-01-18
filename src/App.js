
import './App.css';
import { useState } from 'react';
import Contador from './componentes/Contador';
import ListaMetas from './componentes/ListaMetas';

function App() {
  
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1 className='titulo'>Mis metas</h1>
        <ListaMetas />
        
      </div>
    </div>
  );
}

export default App;